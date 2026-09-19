import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqmaj7bsl.css';
import '../../css/d/dr3x9qbkb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yqmaj7bsl"/><path class="dr3x9qbkb"/></g>`,
		"fallback": "fluent-emoji-flat:bust-in-silhouette",
	});
}

export default Component;
