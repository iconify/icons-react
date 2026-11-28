import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiyunvb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiyunvb8e"/>`,
		"fallback": "noviair-light:calculator",
	});
}

export default Component;
