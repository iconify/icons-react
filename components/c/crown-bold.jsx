import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz143rbfe.css';
import '../../css/a/atekq_emk.css';
import '../../css/q/qse1po-lv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jz143rbfe"/><rect class="atekq_emk"/><path clip-rule="evenodd" class="qse1po-lv"/></g>`,
		"fallback": "glyphs:crown-bold",
	});
}

export default Component;
