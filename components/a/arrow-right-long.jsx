import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhxmwmxwe.css';
import '../../css/t/tiu40hxog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fhxmwmxwe"/><path class="tiu40hxog"/></g>`,
		"fallback": "lets-icons:arrow-right-long",
	});
}

export default Component;
