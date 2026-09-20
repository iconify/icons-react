import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa4bx0bxm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa4bx0bxm"/>`,
		"fallback": "streamline:dashboard-circle",
	});
}

export default Component;
