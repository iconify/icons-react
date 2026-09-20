import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n72qxukim.css';
import '../../css/m/mstxrmb7p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n72qxukim"/><path class="mstxrmb7p"/></g>`,
		"fallback": "pepicons-print:dots-x",
	});
}

export default Component;
