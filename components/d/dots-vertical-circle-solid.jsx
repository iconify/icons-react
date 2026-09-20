import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq-64-z-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq-64-z-u"/>`,
		"fallback": "mynaui:dots-vertical-circle-solid",
	});
}

export default Component;
