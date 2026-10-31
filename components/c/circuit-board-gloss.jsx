import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq-0zab1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq-0zab1v"/>`,
		"fallback": "withicons:circuit-board-gloss",
	});
}

export default Component;
