import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6l62bbzq.css';
import '../../css/u/uxvwwqbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6l62bbzq"/><path class="uxvwwqbvq"/></g>`,
		"fallback": "reicon:bag-smile-duotone",
	});
}

export default Component;
