import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejy0znw5p.css';
import '../../css/j/joz9_qbjc.css';
import '../../css/y/yfe32hksy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ejy0znw5p"/><path class="joz9_qbjc"/><path class="yfe32hksy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:construction-worker",
	});
}

export default Component;
