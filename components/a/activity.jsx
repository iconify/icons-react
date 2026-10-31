import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sc3zu0x4i.css';
import '../../css/y/yrioq7-gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sc3zu0x4i"/><path class="yrioq7-gv"/></g>`,
		"fallback": "withicons-retro:activity",
	});
}

export default Component;
