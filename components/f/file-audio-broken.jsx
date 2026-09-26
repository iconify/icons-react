import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q3_w0cblj.css';
import '../../css/u/uaiu8_3kx.css';
import '../../css/x/xiz9lomik.css';
import '../../css/t/t4qaumccy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q3_w0cblj"/><path class="uaiu8_3kx"/><path class="xiz9lomik"/><path class="t4qaumccy"/></g>`,
		"fallback": "solar:file-audio-broken",
	});
}

export default Component;
