import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vgupd4vsz.css';
import '../../css/l/llzyv_87l.css';
import '../../css/f/fiady5bzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="vgupd4vsz"/><path class="llzyv_87l"/><path class="fiady5bzl"/></g>`,
		"fallback": "andrsrxn:cashback",
	});
}

export default Component;
