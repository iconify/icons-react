import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch4_lnb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch4_lnb0w"/>`,
		"fallback": "heroicons:book-open",
	});
}

export default Component;
