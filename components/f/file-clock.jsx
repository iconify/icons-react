import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axub9ab_d.css';
import '../../css/l/lt8bj64mz.css';
import '../../css/h/hrcfinwcf.css';
import '../../css/d/dn_2bcc-b.css';
import '../../css/x/xgticab4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="axub9ab_d"/><path class="lt8bj64mz"/><path class="hrcfinwcf"/><circle class="dn_2bcc-b"/><path class="xgticab4m"/></g>`,
		"fallback": "andrsrxn:file-clock",
	});
}

export default Component;
