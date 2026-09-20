import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdw75iamg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdw75iamg"/>`,
		"fallback": "ri:arrow-up-down-line",
	});
}

export default Component;
