import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3claz1-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3claz1-k"/>`,
		"fallback": "mdi:email-minus-outline",
	});
}

export default Component;
