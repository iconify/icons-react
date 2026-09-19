import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uz9gb9bqr.css';
import '../../css/o/o_mo92p9y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="uz9gb9bqr"/><path class="o_mo92p9y"/></g>`,
		"fallback": "bytesize:feed",
	});
}

export default Component;
