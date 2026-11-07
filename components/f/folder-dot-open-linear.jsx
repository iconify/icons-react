import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nq3ucobtl.css';
import '../../css/x/xz914h8mb.css';
import '../../css/z/zn-yurbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nq3ucobtl"/><path class="xz914h8mb"/><path class="zn-yurbog"/></g>`,
		"fallback": "solar:folder-dot-open-linear",
	});
}

export default Component;
