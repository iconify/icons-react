import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzu6dufxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzu6dufxb"/>`,
		"fallback": "bxs:calendar-alt",
	});
}

export default Component;
