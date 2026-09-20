import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xqt4oibtx.css';
import '../../css/t/t-jtmez-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xqt4oibtx"/><path class="t-jtmez-q"/></g>`,
		"fallback": "solar:folder-with-files-bold",
	});
}

export default Component;
