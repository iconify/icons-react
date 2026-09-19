import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl_olhb2h.css';
import '../../css/m/m1ql1op8y.css';
import '../../css/i/iu-kfw6gk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cl_olhb2h"/><path class="m1ql1op8y"/><path class="iu-kfw6gk"/></g>`,
		"fallback": "fluent-emoji-flat:cloud-with-lightning-and-rain",
	});
}

export default Component;
