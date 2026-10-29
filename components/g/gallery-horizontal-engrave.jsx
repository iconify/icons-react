import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cbs9hpbzb.css';
import '../../css/g/gxobe3bsj.css';
import '../../css/k/kdh9_zb5j.css';
import '../../css/o/omtqkcbfk.css';
import '../../css/o/od38u2bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cbs9hpbzb wm-k"/><path class="gxobe3bsj wm-a"/><path class="kdh9_zb5j wm-shadow"/><path class="omtqkcbfk wm-k"/><path class="od38u2bjg wm-a"/></g>`,
		"fallback": "withicons:gallery-horizontal-engrave",
	});
}

export default Component;
