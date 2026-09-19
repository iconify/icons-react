import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxr6m5bdn.css';
import '../../css/l/lac4cx13y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mxr6m5bdn"/><path class="lac4cx13y"/></g>`,
		"fallback": "fluent-emoji-flat:crescent-moon",
	});
}

export default Component;
