import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ck9a2y9bt.css';
import '../../css/h/hyklb6qnw.css';
import '../../css/t/tq2ype9_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ck9a2y9bt"/><path class="hyklb6qnw"/><path class="tq2ype9_z"/></g>`,
		"fallback": "heroicons:academic-cap-solid",
	});
}

export default Component;
