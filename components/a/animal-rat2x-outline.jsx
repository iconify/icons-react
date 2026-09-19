import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/do2n1jbgo.css';
import '../../css/w/wvat4gbbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="do2n1jbgo"/><path clip-rule="evenodd" class="wvat4gbbc"/></g>`,
		"fallback": "healthicons:animal-rat2x-outline",
	});
}

export default Component;
