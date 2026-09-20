import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwbsocnoy.css';
import '../../css/p/pfpnh2nsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwbsocnoy"/><path class="pfpnh2nsv"/>`,
		"fallback": "ooui:book-rtl",
	});
}

export default Component;
