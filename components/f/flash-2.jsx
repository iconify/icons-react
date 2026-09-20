import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1_vxl1gq.css';
import '../../css/d/dxxpwj4oj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f1_vxl1gq"/><path class="dxxpwj4oj"/></g>`,
		"fallback": "streamline-color:flash-2",
	});
}

export default Component;
