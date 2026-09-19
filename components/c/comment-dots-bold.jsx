import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wg3spykob.css';
import '../../css/v/vdnlq5aee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="wg3spykob"/><path class="vdnlq5aee"/></g>`,
		"fallback": "iconamoon:comment-dots-bold",
	});
}

export default Component;
