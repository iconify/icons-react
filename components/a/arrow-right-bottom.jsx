import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_i8e7bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_i8e7bst"/>`,
		"fallback": "mdi:arrow-right-bottom",
	});
}

export default Component;
