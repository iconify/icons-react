import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tnrvpm1up.css';
import '../../css/n/n-e1qqb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tnrvpm1up"/><path class="n-e1qqb_j"/></g>`,
		"fallback": "solar:arrow-up-from-line-linear",
	});
}

export default Component;
