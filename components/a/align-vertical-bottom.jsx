import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf9ykhbye.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf9ykhbye"/>`,
		"fallback": "carbon:align-vertical-bottom",
	});
}

export default Component;
