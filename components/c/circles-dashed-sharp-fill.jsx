import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xhu41lreu.css';
import '../../css/s/s0_--vbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xhu41lreu"/><path class="s0_--vbqm"/></g>`,
		"fallback": "keyline-icons:circles-dashed-sharp-fill",
	});
}

export default Component;
