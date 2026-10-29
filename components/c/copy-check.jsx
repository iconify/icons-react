import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l7l825xyg.css';
import '../../css/r/ra2aarbtt.css';
import '../../css/l/l-dl82p6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l7l825xyg wm-k"/><path class="ra2aarbtt wm-a"/><path class="l-dl82p6a wm-s"/></g>`,
		"fallback": "withicons-bauhaus:copy-check",
	});
}

export default Component;
