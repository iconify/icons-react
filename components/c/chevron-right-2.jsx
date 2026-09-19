import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfmwsx5_r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfmwsx5_r"/>`,
		"fallback": "f7:chevron-right-2",
	});
}

export default Component;
