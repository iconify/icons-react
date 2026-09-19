import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/el-cst-rf.css';
import '../../css/v/vqdb4ja4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="el-cst-rf"/><path class="vqdb4ja4u"/></g>`,
		"fallback": "iconoir:ice-cream",
	});
}

export default Component;
