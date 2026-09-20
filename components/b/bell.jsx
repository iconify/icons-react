import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mj85gacfc.css';
import '../../css/s/s-zjnu17c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mj85gacfc"/><path clip-rule="evenodd" class="s-zjnu17c"/></g>`,
		"fallback": "nrk:bell",
	});
}

export default Component;
