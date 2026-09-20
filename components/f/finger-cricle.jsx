import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bggl5sb2g.css';
import '../../css/h/hkzeubbqo.css';
import '../../css/q/qkx_1d5id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bggl5sb2g"/><path class="hkzeubbqo"/><path class="qkx_1d5id"/></g>`,
		"fallback": "reicon:finger-cricle",
	});
}

export default Component;
