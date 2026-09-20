import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1dgwqbut.css';
import '../../css/v/vugh80b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l1dgwqbut"/><path class="vugh80b7h"/></g>`,
		"fallback": "reicon:bookmark5-filled",
	});
}

export default Component;
