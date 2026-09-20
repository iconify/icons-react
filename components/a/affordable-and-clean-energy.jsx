import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hiw9j0bpi.css';
import '../../css/o/o5wrynbmv.css';
import '../../css/j/j7hj7ubnl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hiw9j0bpi"/><path class="o5wrynbmv"/><path class="j7hj7ubnl"/></g>`,
		"fallback": "streamline-color:affordable-and-clean-energy",
	});
}

export default Component;
