import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p5el-civn.css';
import '../../css/t/t6t2vxmxv.css';
import '../../css/n/n1y1i5mpe.css';
import '../../css/h/hdxco9b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="p5el-civn wm-shadow"/><path class="t6t2vxmxv wm-shadow"/><path class="n1y1i5mpe"/><path class="hdxco9b5k"/></g>`,
		"fallback": "withicons-brutal:cloud-rain",
	});
}

export default Component;
