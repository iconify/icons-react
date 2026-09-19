import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ldpwkl4dd.css';
import '../../css/f/f8dyh-3bv.css';
import '../../css/g/g2ybw9bac.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ldpwkl4dd"/><path clip-rule="evenodd" class="f8dyh-3bv"/><path clip-rule="evenodd" class="g2ybw9bac"/></g>`,
		"fallback": "glyphs:car-bold",
	});
}

export default Component;
