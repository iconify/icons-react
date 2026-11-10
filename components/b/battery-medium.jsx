import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znxc6sbtg.css';
import '../../css/y/yb3v2ebjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znxc6sbtg"/><path class="yb3v2ebjk"/></g>`,
		"fallback": "andrsrxn:battery-medium",
	});
}

export default Component;
