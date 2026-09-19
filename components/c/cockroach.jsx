import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9jlpx69u.css';
import '../../css/z/zy4jvvbgc.css';
import '../../css/f/f-nz8pbmv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r9jlpx69u"/><path class="zy4jvvbgc"/><path class="f-nz8pbmv"/></g>`,
		"fallback": "fluent-emoji-flat:cockroach",
	});
}

export default Component;
