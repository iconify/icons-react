import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fbmbkx9cs.css';
import '../../css/y/y1uqs6cnl.css';
import '../../css/a/aencmfh2m.css';
import '../../css/d/dk__gyjbs.css';
import '../../css/q/qg_pme__y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fbmbkx9cs wm-k"/><path class="wm-a y1uqs6cnl"/><path class="aencmfh2m wm-shadow"/><path class="dk__gyjbs wm-k"/><path class="qg_pme__y wm-a"/></g>`,
		"fallback": "withicons:arrow-down-left-engrave",
	});
}

export default Component;
