import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqbn5f49h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqbn5f49h"/>`,
		"fallback": "bi:cart-dash-fill",
	});
}

export default Component;
