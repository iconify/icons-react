import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycjak9csk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycjak9csk"/>`,
		"fallback": "qlementine-icons:add-to-cart-16",
	});
}

export default Component;
