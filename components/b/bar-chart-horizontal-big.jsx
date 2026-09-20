import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qe97cg-lx.css';
import '../../css/e/ej6bo1bfx.css';
import '../../css/h/hr5j5qb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qe97cg-lx"/><rect class="ej6bo1bfx"/><rect class="hr5j5qb1b"/></g>`,
		"fallback": "lucide:bar-chart-horizontal-big",
	});
}

export default Component;
