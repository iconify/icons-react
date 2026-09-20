import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_lwr5nhm.css';
import '../../css/f/flbxrybmh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_lwr5nhm"/><path class="flbxrybmh"/>`,
		"fallback": "qlementine-icons:address-book-add-16",
	});
}

export default Component;
