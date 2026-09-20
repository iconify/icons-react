import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owsm1-kve.css';
import '../../css/b/b1rupy8li.css';
import '../../css/y/ybmkcumuv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owsm1-kve"/><path class="b1rupy8li"/><path class="ybmkcumuv"/>`,
		"fallback": "streamline-pixel:business-products-performance-money-increase",
	});
}

export default Component;
