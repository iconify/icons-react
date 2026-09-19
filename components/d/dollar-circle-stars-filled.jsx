import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj0evtbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj0evtbqn"/>`,
		"fallback": "boxicons:dollar-circle-stars-filled",
	});
}

export default Component;
