import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfuo44u9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfuo44u9b"/>`,
		"fallback": "boxicons:finger-down-filled",
	});
}

export default Component;
