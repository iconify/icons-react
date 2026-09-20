import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haijt0bwe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haijt0bwe"/>`,
		"fallback": "teenyicons:align-text-justify-outline",
	});
}

export default Component;
