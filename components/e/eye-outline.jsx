import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyh8m0cby.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyh8m0cby"/>`,
		"fallback": "pinhead:eye-outline",
	});
}

export default Component;
