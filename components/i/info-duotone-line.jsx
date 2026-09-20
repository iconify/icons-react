import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/f/fu6gzgbjs.css';
import '../../css/h/h7ggax-wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle transform="matrix(-1 0 0 1 22 2)" class="fu6gzgbjs"/><path class="h7ggax-wi"/></g>`,
		"fallback": "lets-icons:info-duotone-line",
	});
}

export default Component;
