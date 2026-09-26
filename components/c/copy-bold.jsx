import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/on3wrlblw.css';
import '../../css/v/v1qidhgnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="on3wrlblw"/><path class="v1qidhgnc"/></g>`,
		"fallback": "solar:copy-bold",
	});
}

export default Component;
