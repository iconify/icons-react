import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kuq22w50o.css';
import '../../css/k/kk4dy7emx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kuq22w50o"/><path class="kk4dy7emx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:barber-pole",
	});
}

export default Component;
