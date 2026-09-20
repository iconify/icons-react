import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3p8uubfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3p8uubfh"/>`,
		"fallback": "mynaui:circle-notch-solid",
	});
}

export default Component;
