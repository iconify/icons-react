import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7k8edchr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7k8edchr"/>`,
		"fallback": "mingcute:currency-euro-line",
	});
}

export default Component;
