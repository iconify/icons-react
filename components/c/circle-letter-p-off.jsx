import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q3nam9bnd.css';
import '../../css/i/i7_3hcc3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q3nam9bnd"/><path class="i7_3hcc3w"/></g>`,
		"fallback": "vadivam:circle-letter-p-off",
	});
}

export default Component;
