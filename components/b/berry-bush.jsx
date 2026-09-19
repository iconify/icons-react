import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaej6lb_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaej6lb_q"/>`,
		"fallback": "game-icons:berry-bush",
	});
}

export default Component;
