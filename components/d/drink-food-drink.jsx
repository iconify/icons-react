import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhds9ybcz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhds9ybcz"/>`,
		"fallback": "streamline-block:drink-food-drink",
	});
}

export default Component;
