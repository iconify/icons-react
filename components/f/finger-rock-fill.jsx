import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3a517biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3a517biz"/>`,
		"fallback": "mingcute:finger-rock-fill",
	});
}

export default Component;
