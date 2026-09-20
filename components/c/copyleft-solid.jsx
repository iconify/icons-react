import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc-3cybbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc-3cybbr"/>`,
		"fallback": "mynaui:copyleft-solid",
	});
}

export default Component;
