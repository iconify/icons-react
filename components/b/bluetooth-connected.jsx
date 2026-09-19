import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n43ka5baq.css';
import '../../css/k/k4w_9bchn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n43ka5baq"/><path class="k4w_9bchn"/></g>`,
		"fallback": "charm:bluetooth-connected",
	});
}

export default Component;
