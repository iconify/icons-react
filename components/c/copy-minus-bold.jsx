import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/do4cdji3e.css';
import '../../css/v/v1qidhgnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="do4cdji3e"/><path class="v1qidhgnc"/></g>`,
		"fallback": "solar:copy-minus-bold",
	});
}

export default Component;
