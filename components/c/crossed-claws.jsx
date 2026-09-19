import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f15_xqbru.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f15_xqbru"/>`,
		"fallback": "game-icons:crossed-claws",
	});
}

export default Component;
