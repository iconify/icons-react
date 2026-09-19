import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dlweo6bfy.css';
import '../../css/s/su8-f1b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dlweo6bfy"/><path clip-rule="evenodd" class="su8-f1b5j"/></g>`,
		"fallback": "griddy-icons:check-circle-alt-02",
	});
}

export default Component;
