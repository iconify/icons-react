import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxc5c4b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxc5c4b8l"/>`,
		"fallback": "hugeicons:color-picker",
	});
}

export default Component;
