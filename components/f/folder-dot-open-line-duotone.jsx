import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ieg6afw1p.css';
import '../../css/x/xz914h8mb.css';
import '../../css/z/zjtb9sbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ieg6afw1p"/><path class="xz914h8mb"/><path class="zjtb9sbmg"/></g>`,
		"fallback": "solar:folder-dot-open-line-duotone",
	});
}

export default Component;
