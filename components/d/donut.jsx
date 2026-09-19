import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gp0egaclj.css';
import '../../css/i/i9hrl4wgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="gp0egaclj"/><path class="i9hrl4wgh"/></g>`,
		"fallback": "hugeicons:donut",
	});
}

export default Component;
