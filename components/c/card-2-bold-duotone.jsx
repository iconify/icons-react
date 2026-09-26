import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ad4x7oblk.css';
import '../../css/h/ha9e9bcnw.css';
import '../../css/j/j9na07rou.css';
import '../../css/m/m0a5tpbcr.css';
import '../../css/o/o1cpgsbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ad4x7oblk"/><path clip-rule="evenodd" class="ha9e9bcnw"/><path class="j9na07rou"/><path class="m0a5tpbcr"/><path class="o1cpgsbzo"/></g>`,
		"fallback": "solar:card-2-bold-duotone",
	});
}

export default Component;
