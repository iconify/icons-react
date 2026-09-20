import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccq__ub1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccq__ub1i"/>`,
		"fallback": "ri:contacts-book-2-fill",
	});
}

export default Component;
