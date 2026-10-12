import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeb77jooy.css';
import '../../css/q/qrvg1ubka.css';
import '../../css/i/ifax5acwj.css';
import '../../css/w/wu32es0ty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oeb77jooy"/><path class="qrvg1ubka"/><path class="ifax5acwj"/><path class="wu32es0ty"/></g>`,
		"fallback": "andrsrxn:chart-bar-horizontal",
	});
}

export default Component;
