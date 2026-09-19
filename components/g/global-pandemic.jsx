import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a9mglwh3c.css';
import '../../css/n/np3j9ubgc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a9mglwh3c"/><path class="np3j9ubgc"/></g>`,
		"fallback": "healthicons:global-pandemic",
	});
}

export default Component;
