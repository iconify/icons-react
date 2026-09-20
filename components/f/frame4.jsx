import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk8z51b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk8z51b7b"/>`,
		"fallback": "reicon:frame4",
	});
}

export default Component;
