import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfe2s8iii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfe2s8iii"/>`,
		"fallback": "game-icons:grasping-claws",
	});
}

export default Component;
