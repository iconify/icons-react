import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mwjrioeuw.css';
import '../../css/g/gmsb27a7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mwjrioeuw"/><path class="gmsb27a7j"/></g>`,
		"fallback": "iconoir:dna",
	});
}

export default Component;
