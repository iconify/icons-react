import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yjy9_xhih.css';
import '../../css/d/dtjbxibrj.css';
import '../../css/v/vzi1xbcty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yjy9_xhih"/><path class="dtjbxibrj"/><path class="vzi1xbcty"/></g>`,
		"fallback": "hugeicons:circle-lock-check-01",
	});
}

export default Component;
