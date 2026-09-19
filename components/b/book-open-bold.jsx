import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s39efpwen.css';
import '../../css/u/ucu_1lbpn.css';
import '../../css/h/hscz_labj.css';
import '../../css/v/vbo612euk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s39efpwen"/><path class="ucu_1lbpn"/><path clip-rule="evenodd" class="hscz_labj"/><path class="vbo612euk"/></g>`,
		"fallback": "glyphs:book-open-bold",
	});
}

export default Component;
