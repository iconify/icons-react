import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qioz3pgou.css';
import '../../css/x/xdk9_oksp.css';
import '../../css/b/bfsv7cc4c.css';
import '../../css/m/ml0cb1b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qioz3pgou"/><path class="xdk9_oksp"/><path class="bfsv7cc4c"/><path class="ml0cb1b5h"/></g>`,
		"fallback": "solar:grid-3x2-broken",
	});
}

export default Component;
