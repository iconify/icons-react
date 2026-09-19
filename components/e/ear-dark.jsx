import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3vfumsqi.css';
import '../../css/w/w9ia3rwmb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d3vfumsqi"/><path class="w9ia3rwmb"/></g>`,
		"fallback": "fluent-emoji-flat:ear-dark",
	});
}

export default Component;
