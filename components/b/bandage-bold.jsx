import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqtldpbjr.css';
import '../../css/z/zgpfknbfx.css';
import '../../css/a/ast-ebc7m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lqtldpbjr"/><path clip-rule="evenodd" class="zgpfknbfx"/><path class="ast-ebc7m"/></g>`,
		"fallback": "glyphs:bandage-bold",
	});
}

export default Component;
