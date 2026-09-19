import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/br134sm8g.css';
import '../../css/o/orixezb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="br134sm8g"/><path clip-rule="evenodd" class="orixezb2n"/></g>`,
		"fallback": "flowbite:droplet-bottle-solid",
	});
}

export default Component;
