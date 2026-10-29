import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/ka2x2ewdo.css';
import '../../css/x/x0p2gccdt.css';
import '../../css/p/pr3luab9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ka2x2ewdo wm-k"/><path class="wm-a x0p2gccdt"/><path class="pr3luab9n"/></g>`,
		"fallback": "withicons-bauhaus:boxes",
	});
}

export default Component;
