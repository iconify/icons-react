import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi7u_f7uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi7u_f7uz"/>`,
		"fallback": "mynaui:dots-vertical-waves",
	});
}

export default Component;
