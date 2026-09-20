import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo8ai3bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo8ai3bxb"/>`,
		"fallback": "mynaui:chevron-up-right-waves-solid",
	});
}

export default Component;
