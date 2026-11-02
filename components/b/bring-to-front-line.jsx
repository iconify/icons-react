import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-x-d5bii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-x-d5bii"/>`,
		"fallback": "mingcute:bring-to-front-line",
	});
}

export default Component;
