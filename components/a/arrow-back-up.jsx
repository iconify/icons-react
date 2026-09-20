import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q3wbegbdg.css';
import '../../css/k/kp59etbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q3wbegbdg"/><path class="kp59etbyh"/></g>`,
		"fallback": "tabler:arrow-back-up",
	});
}

export default Component;
