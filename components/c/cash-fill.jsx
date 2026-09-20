import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udgq5ebyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udgq5ebyk"/>`,
		"fallback": "ri:cash-fill",
	});
}

export default Component;
