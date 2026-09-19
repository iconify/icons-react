import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm5zgub6u.css';

const viewBox = {"width":1920,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm5zgub6u"/>`,
		"fallback": "fa:credit-card",
	});
}

export default Component;
