import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt-7v1wio.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt-7v1wio"/>`,
		"fallback": "ooui:globe",
	});
}

export default Component;
