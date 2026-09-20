import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i87ntsbuq.css';
import '../../css/u/u41y3mg7r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i87ntsbuq"/><path class="u41y3mg7r"/></g>`,
		"fallback": "streamline-color:health-care-2",
	});
}

export default Component;
