import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ehblui4be.css';
import '../../css/r/rlkpa6b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ehblui4be"/><path class="rlkpa6b3s"/></g>`,
		"fallback": "hugeicons:ai-chip",
	});
}

export default Component;
