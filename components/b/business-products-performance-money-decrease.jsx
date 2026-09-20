import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owsm1-kve.css';
import '../../css/j/j-exd4cnk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owsm1-kve"/><path class="j-exd4cnk"/>`,
		"fallback": "streamline-pixel:business-products-performance-money-decrease",
	});
}

export default Component;
