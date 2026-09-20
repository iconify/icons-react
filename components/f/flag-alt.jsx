import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh8oi_0yl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh8oi_0yl"/>`,
		"fallback": "raphael:flag-alt",
	});
}

export default Component;
