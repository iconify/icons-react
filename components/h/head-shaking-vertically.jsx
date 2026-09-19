import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ez_a0yb5j.css';
import '../../css/r/r4mcw20-b.css';
import '../../css/f/f62cwpbfr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ez_a0yb5j"/><path clip-rule="evenodd" class="r4mcw20-b"/><path class="f62cwpbfr"/></g>`,
		"fallback": "fluent-emoji-flat:head-shaking-vertically",
	});
}

export default Component;
