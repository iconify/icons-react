import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad0rzrb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad0rzrb8v"/>`,
		"fallback": "mingcute:contacts-3-fill",
	});
}

export default Component;
