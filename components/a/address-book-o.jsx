import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6yd1sbvi.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6yd1sbvi"/>`,
		"fallback": "fa:address-book-o",
	});
}

export default Component;
