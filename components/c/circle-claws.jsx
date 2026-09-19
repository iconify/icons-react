import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs_5vtbhj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs_5vtbhj"/>`,
		"fallback": "game-icons:circle-claws",
	});
}

export default Component;
