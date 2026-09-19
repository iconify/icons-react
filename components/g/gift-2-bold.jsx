import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_c-szbwg.css';
import '../../css/g/ge_45_ljf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t_c-szbwg"/><path clip-rule="evenodd" class="ge_45_ljf"/></g>`,
		"fallback": "glyphs:gift-2-bold",
	});
}

export default Component;
