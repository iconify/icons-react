import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q70x7acsk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q70x7acsk"/>`,
		"fallback": "game-icons:cubes",
	});
}

export default Component;
