import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hkzeubbqo.css';
import '../../css/q/qkx_1d5id.css';
import '../../css/j/j5ec80dni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hkzeubbqo"/><path class="qkx_1d5id"/><path class="j5ec80dni"/></g>`,
		"fallback": "reicon:finger-scan",
	});
}

export default Component;
