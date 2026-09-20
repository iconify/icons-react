import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jgo1o2mwj.css';
import '../../css/b/b3ghvpbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jgo1o2mwj"/><path class="b3ghvpbty"/></g>`,
		"fallback": "mynaui:download-solid",
	});
}

export default Component;
