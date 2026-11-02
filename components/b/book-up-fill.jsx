import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dta0kn4kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dta0kn4kn"/>`,
		"fallback": "mingcute:book-up-fill",
	});
}

export default Component;
