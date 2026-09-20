import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q7pmbvbyy.css';
import '../../css/o/o0ec1wbes.css';
import '../../css/r/r_a80bcel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q7pmbvbyy"/><path class="o0ec1wbes"/><path class="r_a80bcel"/></g>`,
		"fallback": "tabler:car-suv",
	});
}

export default Component;
