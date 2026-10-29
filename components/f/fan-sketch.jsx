import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lmla34nnh.css';
import '../../css/s/stk13fbal.css';
import '../../css/s/suvv_lbra.css';
import '../../css/n/ni2pyrbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lmla34nnh wm-k"/><path class="stk13fbal wm-a"/><path class="suvv_lbra wm-k"/><path class="ni2pyrbla wm-a"/></g>`,
		"fallback": "withicons:fan-sketch",
	});
}

export default Component;
