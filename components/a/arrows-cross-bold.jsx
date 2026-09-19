import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ds-o0-bao.css';
import '../../css/c/cihcivbvm.css';
import '../../css/o/o5ig9ksrn.css';
import '../../css/d/d5al52b3t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ds-o0-bao"/><path class="cihcivbvm"/><path class="o5ig9ksrn"/><path class="d5al52b3t"/></g>`,
		"fallback": "glyphs:arrows-cross-bold",
	});
}

export default Component;
