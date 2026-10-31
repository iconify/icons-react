import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q_nfp4b8i.css';
import '../../css/w/w28c90rpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q_nfp4b8i"/><path class="w28c90rpw"/></g>`,
		"fallback": "withicons-retro:chart-bar-horizontal",
	});
}

export default Component;
