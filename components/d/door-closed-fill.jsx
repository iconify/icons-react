import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1bj2u4dt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1bj2u4dt"/>`,
		"fallback": "bi:door-closed-fill",
	});
}

export default Component;
