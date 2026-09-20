import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h02zmjtek.css';
import '../../css/x/xk9upfb1q.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h02zmjtek"/><path class="xk9upfb1q"/>`,
		"fallback": "lineicons:download",
	});
}

export default Component;
