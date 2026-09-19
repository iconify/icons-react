import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jncd0gk1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jncd0gk1c"/>`,
		"fallback": "game-icons:daggers",
	});
}

export default Component;
