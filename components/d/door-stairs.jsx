import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dnu2vgbrj.css';
import '../../css/q/qkegbzowp.css';
import '../../css/j/js675nd5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dnu2vgbrj"/><path class="qkegbzowp"/><path class="js675nd5c"/></g>`,
		"fallback": "andrsrxn:door-stairs",
	});
}

export default Component;
