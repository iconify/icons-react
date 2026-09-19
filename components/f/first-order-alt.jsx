import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l872kltby.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l872kltby"/>`,
		"fallback": "fa7-brands:first-order-alt",
	});
}

export default Component;
