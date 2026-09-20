import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pfq1zabsk.css';
import '../../css/z/zmqdmf56j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pfq1zabsk"/><path clip-rule="evenodd" class="zmqdmf56j"/></g>`,
		"fallback": "solar:folder-search-bold",
	});
}

export default Component;
