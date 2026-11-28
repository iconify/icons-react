import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bkr9f5bqq.css';
import '../../css/o/on4syob4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bkr9f5bqq secondary"/><path class="on4syob4n primary"/></g>`,
		"fallback": "iconaut:folder-star-duotone",
	});
}

export default Component;
