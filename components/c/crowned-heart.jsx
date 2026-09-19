import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf6liccig.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf6liccig"/>`,
		"fallback": "game-icons:crowned-heart",
	});
}

export default Component;
