import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5ckajb4i.css';
import '../../css/k/ka6oddeze.css';
import '../../css/v/v3lupybhi.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5ckajb4i"/><path class="ka6oddeze"/><path class="v3lupybhi"/></g>`,
		"fallback": "cif:cr",
	});
}

export default Component;
