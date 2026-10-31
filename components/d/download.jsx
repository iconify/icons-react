import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ue4mmpb5y.css';
import '../../css/k/k-xhdrb-y.css';
import '../../css/q/q4f-z41uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ue4mmpb5y wm-shadow"/><path class="k-xhdrb-y"/><path class="q4f-z41uy"/></g>`,
		"fallback": "withicons-retro:download",
	});
}

export default Component;
