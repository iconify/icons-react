import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeq8ggb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeq8ggb4k"/>`,
		"fallback": "mingcute:arrow-left-up-circle-line",
	});
}

export default Component;
