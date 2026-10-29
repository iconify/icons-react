import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w3vjh-tiq.css';
import '../../css/h/h6g7niile.css';
import '../../css/x/xfda1sb-y.css';
import '../../css/m/mcp_pbb2e.css';
import '../../css/o/ou82ezbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w3vjh-tiq wm-k"/><path class="h6g7niile wm-a"/><path class="wm-shadow xfda1sb-y"/><path class="mcp_pbb2e wm-k"/><path class="ou82ezbwj wm-a"/></g>`,
		"fallback": "withicons:case-upper-engrave",
	});
}

export default Component;
