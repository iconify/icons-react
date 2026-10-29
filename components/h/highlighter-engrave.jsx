import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zguq1dbdi.css';
import '../../css/a/aibqp5ysk.css';
import '../../css/a/a4ko41ypx.css';
import '../../css/j/jgr-ou_0r.css';
import '../../css/t/tvc6zw-sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k zguq1dbdi"/><path class="aibqp5ysk wm-a"/><path class="a4ko41ypx wm-shadow"/><path class="jgr-ou_0r wm-k"/><path class="tvc6zw-sb wm-a"/></g>`,
		"fallback": "withicons:highlighter-engrave",
	});
}

export default Component;
