import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jccy-06wj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jccy-06wj"/>`,
		"fallback": "game-icons:arrowhead",
	});
}

export default Component;
