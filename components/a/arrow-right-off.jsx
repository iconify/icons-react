import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2-s4tbmo.css';
import '../../css/k/k1do8cciu.css';
import '../../css/b/bxfg0ibwz.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s2-s4tbmo"/><path clip-rule="evenodd" class="k1do8cciu"/><path clip-rule="evenodd" class="bxfg0ibwz"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:arrow-right-off",
	});
}

export default Component;
