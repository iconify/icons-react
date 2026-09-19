import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtu_2e0sq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtu_2e0sq"/>`,
		"fallback": "boxicons:dock-left-alt-filled",
	});
}

export default Component;
