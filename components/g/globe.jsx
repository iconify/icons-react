import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhda001sz.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhda001sz"/>`,
		"fallback": "fa-solid:globe",
	});
}

export default Component;
