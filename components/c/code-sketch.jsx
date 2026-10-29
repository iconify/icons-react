import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xmr-in37f.css';
import '../../css/z/zswzsrbrv.css';
import '../../css/h/hzwmdd9_j.css';
import '../../css/p/pqythin0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xmr-in37f"/><path class="wm-a zswzsrbrv"/><path class="hzwmdd9_j wm-k"/><path class="pqythin0z wm-a"/></g>`,
		"fallback": "withicons:code-sketch",
	});
}

export default Component;
