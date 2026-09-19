import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eap06jblr.css';
import '../../css/q/q-j3uhb1m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eap06jblr"/><path class="q-j3uhb1m"/></g>`,
		"fallback": "bi:folder-x",
	});
}

export default Component;
