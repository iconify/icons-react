import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q0617nbqu.css';
import '../../css/m/mu7o7-bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q0617nbqu"/><path class="mu7o7-bam"/></g>`,
		"fallback": "hugeicons:hospital-02",
	});
}

export default Component;
