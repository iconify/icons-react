import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hc3ha90ri.css';
import '../../css/k/kxln91b_t.css';
import '../../css/d/d1s63ybjv.css';
import '../../css/g/g622mc63x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hc3ha90ri"/><path class="kxln91b_t"/><circle class="d1s63ybjv"/><path class="g622mc63x"/></g>`,
		"fallback": "reicon:half-dotted-circle-play-filled",
	});
}

export default Component;
