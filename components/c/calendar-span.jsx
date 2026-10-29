import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eiurq3tnm.css';
import '../../css/a/aj__h47xf.css';
import '../../css/o/ot_9w3bfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="eiurq3tnm"/><path class="aj__h47xf"/><path class="ot_9w3bfk"/></g>`,
		"fallback": "withicons-bauhaus:calendar-span",
	});
}

export default Component;
