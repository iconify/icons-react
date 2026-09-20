import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec1x-acku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec1x-acku"/>`,
		"fallback": "mynaui:book-minus",
	});
}

export default Component;
