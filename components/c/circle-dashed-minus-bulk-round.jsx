import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ls6shcckx.css';
import '../../css/t/t02sidbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ls6shcckx"/><path class="t02sidbcr"/></g>`,
		"fallback": "coolicons:circle-dashed-minus-bulk-round",
	});
}

export default Component;
