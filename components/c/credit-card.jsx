import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dkji50bpo.css';
import '../../css/m/m4fohebdt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dkji50bpo"/><path class="m4fohebdt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:credit-card",
	});
}

export default Component;
