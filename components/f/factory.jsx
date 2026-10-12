import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xdcbkgkkh.css';
import '../../css/f/fl9rksivi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xdcbkgkkh"/><path class="fl9rksivi"/></g>`,
		"fallback": "andrsrxn:factory",
	});
}

export default Component;
