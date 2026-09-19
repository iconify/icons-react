import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te8dmcqmn.css';
import '../../css/f/f90hk456q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="te8dmcqmn"/><rect class="f90hk456q"/></g>`,
		"fallback": "glyphs-poly:fahrenheit",
	});
}

export default Component;
