import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym5aslb1a.css';

const viewBox = {"width":680,"height":642};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym5aslb1a"/>`,
		"fallback": "ls:bag",
	});
}

export default Component;
