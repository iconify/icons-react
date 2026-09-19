import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl2-epb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl2-epb3t"/>`,
		"fallback": "boxicons:clock-7-filled",
	});
}

export default Component;
