import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/l0lxso0pj.css';
import '../../css/s/sfdtz-b-u.css';
import '../../css/q/qascy_bmd.css';
import '../../css/z/zya50cb3v.css';
import '../../css/i/i2zb28byn.css';
import '../../css/a/a5milofum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="l0lxso0pj"/><path class="sfdtz-b-u"/></g><path class="qascy_bmd"/><path class="zya50cb3v"/><path clip-rule="evenodd" class="i2zb28byn"/><path class="a5milofum"/></g>`,
		"fallback": "solar:airbuds-check-bold-duotone",
	});
}

export default Component;
