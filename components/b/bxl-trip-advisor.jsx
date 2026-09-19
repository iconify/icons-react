import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhzb-acko.css';
import '../../css/r/r1ceurbff.css';
import '../../css/z/zsl5jvb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhzb-acko"/><path class="r1ceurbff"/><path class="zsl5jvb1i"/>`,
		"fallback": "bx:bxl-trip-advisor",
	});
}

export default Component;
