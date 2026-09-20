import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x1ekge_ac.css';
import '../../css/l/l80i0rb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x1ekge_ac"/><path class="l80i0rb1m"/></g>`,
		"fallback": "solar:bolt-circle-line-duotone",
	});
}

export default Component;
