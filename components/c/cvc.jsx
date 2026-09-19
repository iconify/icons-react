import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lolsh5puj.css';
import '../../css/p/p3pyo1qcj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lolsh5puj"/><path class="p3pyo1qcj"/></g>`,
		"fallback": "cryptocurrency-color:cvc",
	});
}

export default Component;
