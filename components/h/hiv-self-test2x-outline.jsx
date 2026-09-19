import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7a1ynbna.css';
import '../../css/g/gxhk6bb8f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i7a1ynbna"/><path class="gxhk6bb8f"/></g>`,
		"fallback": "healthicons:hiv-self-test2x-outline",
	});
}

export default Component;
