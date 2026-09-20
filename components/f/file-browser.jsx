import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q41rbdk3p.css';
import '../../css/p/po_tpsbqb.css';
import '../../css/z/zt_f-1b6r.css';
import '../../css/f/fpsms8w3k.css';
import '../../css/l/l-_u6yahr.css';
import '../../css/n/ne_2yhb2r.css';
import '../../css/w/wmuyj-bpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q41rbdk3p"/><path class="po_tpsbqb"/><path class="zt_f-1b6r"/><path class="fpsms8w3k"/><path class="l-_u6yahr"/><path class="ne_2yhb2r"/><path class="wmuyj-bpw"/>`,
		"fallback": "selfhst:file-browser",
	});
}

export default Component;
