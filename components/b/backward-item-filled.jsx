import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aszmkbb9q.css';
import '../../css/l/lct-59bwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aszmkbb9q"/><path class="lct-59bwj"/></g>`,
		"fallback": "reicon:backward-item-filled",
	});
}

export default Component;
