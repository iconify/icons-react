import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x8n4opbkv.css';
import '../../css/s/sqylgf2bu.css';
import '../../css/b/b_8ozvbnm.css';
import '../../css/v/vv7a3663y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x8n4opbkv"/><path class="sqylgf2bu wm-a"/><path class="b_8ozvbnm wm-k"/><path class="vv7a3663y wm-a"/></g>`,
		"fallback": "withicons:forward-sketch",
	});
}

export default Component;
