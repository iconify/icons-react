import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgzl3pbub.css';
import '../../css/y/yixh8cciz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgzl3pbub"/><path class="yixh8cciz"/>`,
		"fallback": "medical-icon:coffee-shop",
	});
}

export default Component;
