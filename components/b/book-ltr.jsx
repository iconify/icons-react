import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkr-y0bjo.css';
import '../../css/p/pfpnh2nsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkr-y0bjo"/><path class="pfpnh2nsv"/>`,
		"fallback": "ooui:book-ltr",
	});
}

export default Component;
