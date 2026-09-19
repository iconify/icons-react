import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fth-_-beu.css';
import '../../css/j/jwnes9bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fth-_-beu"/><path class="jwnes9bsk"/></g>`,
		"fallback": "hugeicons:chess-02",
	});
}

export default Component;
