import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_q_91b6q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_q_91b6q"/>`,
		"fallback": "game-icons:bed",
	});
}

export default Component;
