import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwq3qbwrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwq3qbwrk"/>`,
		"fallback": "hugeicons:between-vertical-start",
	});
}

export default Component;
