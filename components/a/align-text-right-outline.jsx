import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myf1a-boj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myf1a-boj"/>`,
		"fallback": "teenyicons:align-text-right-outline",
	});
}

export default Component;
