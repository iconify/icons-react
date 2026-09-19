import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7uv99btm.css';
import '../../css/q/qjd0nrblb.css';
import '../../css/v/vyste6pai.css';
import '../../css/w/w3p7knb-q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e7uv99btm"/><path class="qjd0nrblb"/><path class="vyste6pai"/><path class="w3p7knb-q"/></g>`,
		"fallback": "fluent-emoji-flat:briefcase",
	});
}

export default Component;
