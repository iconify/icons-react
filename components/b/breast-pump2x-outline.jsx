import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wrpbjb6cy.css';
import '../../css/x/xrd-u7syi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wrpbjb6cy"/><path clip-rule="evenodd" class="xrd-u7syi"/></g>`,
		"fallback": "healthicons:breast-pump2x-outline",
	});
}

export default Component;
