import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mi-5r-bmr.css';
import '../../css/i/i8ba38uct.css';
import '../../css/k/kckmgybcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mi-5r-bmr"/><path class="i8ba38uct"/><path class="kckmgybcc"/></g>`,
		"fallback": "andrsrxn:flag-racing",
	});
}

export default Component;
