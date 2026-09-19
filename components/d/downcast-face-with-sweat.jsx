import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-tvyub3p.css';
import '../../css/a/ak449ya1m.css';
import '../../css/c/csa3gvbob.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h-tvyub3p"/><path class="ak449ya1m"/><path class="csa3gvbob"/></g>`,
		"fallback": "fluent-emoji-high-contrast:downcast-face-with-sweat",
	});
}

export default Component;
