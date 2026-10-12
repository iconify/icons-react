import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znxc6sbtg.css';
import '../../css/y/y3-35o4du.css';
import '../../css/w/w9nqp9_mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znxc6sbtg"/><rect class="y3-35o4du"/><path class="w9nqp9_mn"/></g>`,
		"fallback": "andrsrxn:battery-medium",
	});
}

export default Component;
