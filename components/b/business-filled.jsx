import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxz9krbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxz9krbus"/>`,
		"fallback": "boxicons:business-filled",
	});
}

export default Component;
