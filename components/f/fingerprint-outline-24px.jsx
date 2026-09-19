import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d3urgtb2i.css';
import '../../css/b/bx8jjl-jo.css';
import '../../css/a/acyy7bb5r.css';
import '../../css/y/ym1ut9bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d3urgtb2i"/><path class="bx8jjl-jo"/><path class="acyy7bb5r"/><path class="ym1ut9bxy"/></g>`,
		"fallback": "healthicons:fingerprint-outline-24px",
	});
}

export default Component;
