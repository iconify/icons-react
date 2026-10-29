import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vgxyyhbte.css';
import '../../css/l/l81190bjf.css';
import '../../css/x/xs1uylbmg.css';
import '../../css/x/xw_wnepym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vgxyyhbte wm-k"/><path class="l81190bjf"/><path class="xs1uylbmg"/><path class="wm-s xw_wnepym"/></g>`,
		"fallback": "withicons-bauhaus:firecracker-string",
	});
}

export default Component;
