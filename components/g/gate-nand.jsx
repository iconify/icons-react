import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vr5jgobbi.css';
import '../../css/l/lww7c4bwc.css';
import '../../css/w/w9hoqqbod.css';
import '../../css/c/c3dxk4b9p.css';
import '../../css/q/qso6odhhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vr5jgobbi"/><path class="lww7c4bwc"/><path class="w9hoqqbod"/><path class="c3dxk4b9p"/><path class="qso6odhhx"/></g>`,
		"fallback": "iconaut:gate-nand",
	});
}

export default Component;
