import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2r6jz7gt.css';
import '../../css/u/uto4wj_to.css';
import '../../css/m/mptz6qyat.css';
import '../../css/h/hqxu0ccaz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y2r6jz7gt"/><path class="uto4wj_to"/><path class="mptz6qyat"/><path class="hqxu0ccaz"/></g>`,
		"fallback": "streamline-color:airport-plane-transit",
	});
}

export default Component;
