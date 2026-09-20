import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy3kvnbub.css';
import '../../css/q/q_gqcab0j.css';
import '../../css/v/v-p6o8thf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy3kvnbub"/><path class="q_gqcab0j"/><path class="v-p6o8thf"/>`,
		"fallback": "openmoji:black-vertical-rectangle",
	});
}

export default Component;
