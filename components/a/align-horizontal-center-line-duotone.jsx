import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rb-moul8l.css';
import '../../css/r/rd5_q5bmh.css';
import '../../css/y/y2b_7cbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rb-moul8l"/><path class="rd5_q5bmh"/><path class="y2b_7cbos"/></g>`,
		"fallback": "solar:align-horizontal-center-line-duotone",
	});
}

export default Component;
