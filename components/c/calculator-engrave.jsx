import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/etlx3qbwc.css';
import '../../css/x/xfcab7bto.css';
import '../../css/l/l7umh3bwe.css';
import '../../css/n/nj6yhupln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="etlx3qbwc wm-k"/><path class="wm-shadow xfcab7bto"/><path class="l7umh3bwe wm-k"/><path class="nj6yhupln wm-a"/></g>`,
		"fallback": "withicons:calculator-engrave",
	});
}

export default Component;
