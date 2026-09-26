import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o9mc-tb4g.css';
import '../../css/a/a9h0to_hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o9mc-tb4g"/><path clip-rule="evenodd" class="a9h0to_hh"/></g>`,
		"fallback": "solar:copy-close-outline",
	});
}

export default Component;
