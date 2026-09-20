import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pat7lvhmi.css';
import '../../css/u/ubhvc2qvk.css';
import '../../css/c/cgfa64b1w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pat7lvhmi"/><path class="ubhvc2qvk"/><path class="cgfa64b1w"/></g>`,
		"fallback": "streamline-color:discount-percent-fire",
	});
}

export default Component;
