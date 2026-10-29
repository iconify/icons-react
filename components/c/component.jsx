import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nfku59krc.css';
import '../../css/x/x9ttfg9rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nfku59krc wm-k"/><path class="wm-a x9ttfg9rn"/></g>`,
		"fallback": "withicons-bauhaus:component",
	});
}

export default Component;
