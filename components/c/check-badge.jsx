import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dogt75f8d.css';
import '../../css/n/nha-p7yxm.css';
import '../../css/x/xc034mpfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dogt75f8d"/><path class="nha-p7yxm"/><path class="xc034mpfi"/></g>`,
		"fallback": "andrsrxn:check-badge",
	});
}

export default Component;
