import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af85et9ie.css';
import '../../css/g/go148f1nh.css';
import '../../css/l/l17csmkjz.css';
import '../../css/c/cno5lzbwt.css';
import '../../css/z/zgxp76txc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="af85et9ie"/><path class="go148f1nh"/><path class="l17csmkjz"/><path class="cno5lzbwt"/><path class="zgxp76txc"/></g>`,
		"fallback": "andrsrxn:cloud-sun-rain",
	});
}

export default Component;
