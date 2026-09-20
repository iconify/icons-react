import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knoj3nbcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knoj3nbcc"/>`,
		"fallback": "solar:arrow-to-down-left-broken",
	});
}

export default Component;
