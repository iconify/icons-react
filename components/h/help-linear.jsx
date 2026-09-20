import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/m/mxpc0lbwc.css';
import '../../css/x/xo0gn7bpl.css';
import '../../css/m/mho4m-bvk.css';
import '../../css/y/ynqplacsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><circle class="aqhok2bbj"/><path class="mxpc0lbwc"/><path class="xo0gn7bpl"/><path class="mho4m-bvk"/><path class="ynqplacsi"/></g>`,
		"fallback": "solar:help-linear",
	});
}

export default Component;
