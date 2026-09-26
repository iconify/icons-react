import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/exuxe-b4e.css';
import '../../css/i/ic_cgwbjf.css';
import '../../css/r/rufx8lb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="exuxe-b4e"/><path class="ic_cgwbjf"/><path class="rufx8lb6m"/></g>`,
		"fallback": "solar:file-stack-bold",
	});
}

export default Component;
