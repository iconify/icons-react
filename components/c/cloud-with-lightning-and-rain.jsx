import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iyrheh46z.css';
import '../../css/e/eudx2-bit.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iyrheh46z"/><path class="eudx2-bit"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cloud-with-lightning-and-rain",
	});
}

export default Component;
