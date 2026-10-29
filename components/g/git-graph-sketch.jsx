import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mju-o0bov.css';
import '../../css/z/zuax7pdxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mju-o0bov wm-k"/><path class="wm-a zuax7pdxr"/></g>`,
		"fallback": "withicons:git-graph-sketch",
	});
}

export default Component;
