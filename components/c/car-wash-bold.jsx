import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qtlwvibtj.css';
import '../../css/z/z3azmnbhz.css';
import '../../css/t/t5f3tsppg.css';
import '../../css/m/mzjq7bp9w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qtlwvibtj"/><path clip-rule="evenodd" class="z3azmnbhz"/><path clip-rule="evenodd" class="t5f3tsppg"/><path class="mzjq7bp9w"/></g>`,
		"fallback": "glyphs:car-wash-bold",
	});
}

export default Component;
