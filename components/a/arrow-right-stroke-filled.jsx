import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsiui4qwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsiui4qwu"/>`,
		"fallback": "boxicons:arrow-right-stroke-filled",
	});
}

export default Component;
