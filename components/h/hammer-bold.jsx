import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iad3jz0vo.css';
import '../../css/q/qubhqfq4s.css';
import '../../css/a/alepcebtt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iad3jz0vo"/><path clip-rule="evenodd" class="qubhqfq4s"/><path class="alepcebtt"/></g>`,
		"fallback": "glyphs:hammer-bold",
	});
}

export default Component;
