import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8l7v2buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8l7v2buj"/>`,
		"fallback": "mingcute:home-1-line",
	});
}

export default Component;
