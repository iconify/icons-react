import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ngc5w1b_f.css';
import '../../css/s/slpd7bdal.css';
import '../../css/s/slwdzb4zh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ngc5w1b_f"/><path class="slpd7bdal"/><path clip-rule="evenodd" class="slwdzb4zh"/></g>`,
		"fallback": "glyphs:industry-bold",
	});
}

export default Component;
