import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u2_r0jbnx.css';
import '../../css/x/xx6wz-ltc.css';
import '../../css/h/hucbiosco.css';
import '../../css/w/w2kg8tbni.css';
import '../../css/r/rxp9x9b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u2_r0jbnx"/><path class="wm-k xx6wz-ltc"/><path class="hucbiosco wm-a"/><path class="w2kg8tbni wm-k"/><path class="rxp9x9b_t wm-a"/></g>`,
		"fallback": "withicons:fireplace-sketch",
	});
}

export default Component;
