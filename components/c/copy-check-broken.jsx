import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xbke42brb.css';
import '../../css/t/t60_6fbkn.css';
import '../../css/n/n6gwi0b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xbke42brb"/><path class="t60_6fbkn"/><path class="n6gwi0b2o"/></g>`,
		"fallback": "solar:copy-check-broken",
	});
}

export default Component;
