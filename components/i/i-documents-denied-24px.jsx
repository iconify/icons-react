import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/stesgvbgl.css';
import '../../css/v/vdy3kbbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="stesgvbgl"/><path class="vdy3kbbgb"/></g>`,
		"fallback": "healthicons:i-documents-denied-24px",
	});
}

export default Component;
