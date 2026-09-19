import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8-47p4hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8-47p4hb"/>`,
		"fallback": "boxicons:circuit-board-filled",
	});
}

export default Component;
