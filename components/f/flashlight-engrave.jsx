import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/chhsgivzo.css';
import '../../css/d/dfzb3k5ia.css';
import '../../css/j/jgi_vdb6a.css';
import '../../css/n/n4ra6qb5a.css';
import '../../css/h/h4uzyibtm.css';
import '../../css/a/a5neubxnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="chhsgivzo wm-k"/><path class="dfzb3k5ia wm-s"/><path class="jgi_vdb6a wm-shadow"/><path class="n4ra6qb5a wm-k"/><path class="h4uzyibtm wm-a"/><path class="a5neubxnb wm-s"/></g>`,
		"fallback": "withicons:flashlight-engrave",
	});
}

export default Component;
