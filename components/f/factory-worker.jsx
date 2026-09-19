import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzib17bsz.css';
import '../../css/t/tq0xuccly.css';
import '../../css/i/i6e9c_m2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jzib17bsz"/><path clip-rule="evenodd" class="tq0xuccly"/><path class="i6e9c_m2f"/></g>`,
		"fallback": "healthicons:factory-worker",
	});
}

export default Component;
