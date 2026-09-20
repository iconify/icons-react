import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpj0hbcby.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpj0hbcby"/>`,
		"fallback": "teenyicons:headphones-outline",
	});
}

export default Component;
