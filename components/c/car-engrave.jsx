import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zmg94893m.css';
import '../../css/t/ttu-kdb_o.css';
import '../../css/z/zzwkrdbkt.css';
import '../../css/o/op2j7xbfi.css';
import '../../css/p/ps_vgzj8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k zmg94893m"/><path class="ttu-kdb_o wm-shadow"/><path class="wm-k zzwkrdbkt"/><path class="op2j7xbfi wm-a"/><path class="ps_vgzj8q wm-k"/></g>`,
		"fallback": "withicons:car-engrave",
	});
}

export default Component;
