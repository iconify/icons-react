import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r0kwh_nzx.css';
import '../../css/z/z1nnqnb8v.css';
import '../../css/t/tucdj7bkz.css';
import '../../css/z/zolve-n6y.css';
import '../../css/m/m9-4k6y9w.css';
import '../../css/p/pf05l3ymp.css';
import '../../css/d/dkfws9ftw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r0kwh_nzx wm-k"/><path class="wm-a z1nnqnb8v"/><path class="tucdj7bkz wm-s"/><path class="wm-shadow zolve-n6y"/><path class="m9-4k6y9w wm-k"/><path class="pf05l3ymp wm-a"/><path class="dkfws9ftw wm-s"/></g>`,
		"fallback": "withicons:cloud-sun-rain-engrave",
	});
}

export default Component;
