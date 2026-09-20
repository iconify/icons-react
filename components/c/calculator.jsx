import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m_amwm72x.css';
import '../../css/q/qgosofu5g.css';
import '../../css/k/kbve0klbm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m_amwm72x"/><path clip-rule="evenodd" class="qgosofu5g"/><path class="kbve0klbm"/></g>`,
		"fallback": "pepicons-print:calculator",
	});
}

export default Component;
