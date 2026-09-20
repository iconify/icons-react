import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl6__vdrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl6__vdrt"/>`,
		"fallback": "tabler:bounce-right",
	});
}

export default Component;
