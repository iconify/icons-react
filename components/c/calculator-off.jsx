import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgosofu5g.css';
import '../../css/k/kbve0klbm.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qgosofu5g"/><path class="kbve0klbm"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:calculator-off",
	});
}

export default Component;
