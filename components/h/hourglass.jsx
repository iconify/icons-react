import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kesxv2ddf.css';
import '../../css/c/c5tjsfbln.css';
import '../../css/s/s2vaych-g.css';
import '../../css/q/qlg8_6z_g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kesxv2ddf"/><path clip-rule="evenodd" class="c5tjsfbln"/><path class="s2vaych-g"/><path clip-rule="evenodd" class="qlg8_6z_g"/></g>`,
		"fallback": "pepicons:hourglass",
	});
}

export default Component;
