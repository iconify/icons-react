import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhdu9cbye.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhdu9cbye"/>`,
		"fallback": "la:baby-carriage",
	});
}

export default Component;
