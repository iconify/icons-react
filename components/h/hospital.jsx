import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1ff0s1ob.css';
import '../../css/c/cj6u56b5f.css';
import '../../css/r/rj5c37bgb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1ff0s1ob"/><path class="cj6u56b5f"/><path class="rj5c37bgb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hospital",
	});
}

export default Component;
