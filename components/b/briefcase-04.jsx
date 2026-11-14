import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q5af2hbrr.css';
import '../../css/t/tufr81b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q5af2hbrr"/><path class="tufr81b4j"/></g>`,
		"fallback": "hugeicons:briefcase-04",
	});
}

export default Component;
