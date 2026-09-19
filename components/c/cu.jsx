import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oosxhub9j.css';
import '../../css/z/zmt_f-b5f.css';
import '../../css/m/mxlvpg2cl.css';
import '../../css/q/qth5443vm.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oosxhub9j"/><path class="zmt_f-b5f"/><path class="mxlvpg2cl"/><path class="qth5443vm"/></g>`,
		"fallback": "cif:cu",
	});
}

export default Component;
