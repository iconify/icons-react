import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv6e02qag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv6e02qag"/>`,
		"fallback": "lineicons:500px",
	});
}

export default Component;
