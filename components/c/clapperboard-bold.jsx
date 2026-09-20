import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ra3icybqn.css';
import '../../css/w/w7wbu5bna.css';
import '../../css/f/f4d5x_t8i.css';
import '../../css/c/cvilxkbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ra3icybqn"/><path class="w7wbu5bna"/><path class="f4d5x_t8i"/><path class="cvilxkbqn"/></g>`,
		"fallback": "solar:clapperboard-bold",
	});
}

export default Component;
