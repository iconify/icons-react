import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7eyxnb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7eyxnb1u"/>`,
		"fallback": "mynaui:arrow-down-circle-solid",
	});
}

export default Component;
