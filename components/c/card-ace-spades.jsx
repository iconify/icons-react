import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5w_rjbga.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5w_rjbga"/>`,
		"fallback": "game-icons:card-ace-spades",
	});
}

export default Component;
