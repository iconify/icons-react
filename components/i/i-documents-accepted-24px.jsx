import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4ww9sbhv.css';
import '../../css/e/epfw27d5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q4ww9sbhv"/><path class="epfw27d5p"/></g>`,
		"fallback": "healthicons:i-documents-accepted-24px",
	});
}

export default Component;
