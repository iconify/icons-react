import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw-kpqxcu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw-kpqxcu"/>`,
		"fallback": "qlementine-icons:cashier-ticket-16",
	});
}

export default Component;
