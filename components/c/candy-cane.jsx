import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_oulcbic.css';
import '../../css/h/h29r2ibir.css';
import '../../css/r/r-g2wpb4d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_oulcbic"/><path class="h29r2ibir"/><path class="r-g2wpb4d"/></g>`,
		"fallback": "streamline-color:candy-cane",
	});
}

export default Component;
