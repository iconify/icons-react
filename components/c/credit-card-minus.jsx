import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccgk95bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccgk95bls"/>`,
		"fallback": "mynaui:credit-card-minus",
	});
}

export default Component;
