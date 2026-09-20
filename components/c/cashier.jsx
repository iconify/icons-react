import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-1oz4bkn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-1oz4bkn"/>`,
		"fallback": "picon:cashier",
	});
}

export default Component;
