import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeb77jooy.css';
import '../../css/m/mv_aqwb1k.css';
import '../../css/i/in67ueoox.css';
import '../../css/x/xvem3fbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oeb77jooy"/><path class="mv_aqwb1k"/><path class="in67ueoox"/><path class="xvem3fbdr"/></g>`,
		"fallback": "andrsrxn:chart-bar-horizontal",
	});
}

export default Component;
