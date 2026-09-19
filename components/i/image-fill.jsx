import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4xjjczwm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4xjjczwm"/>`,
		"fallback": "bi:image-fill",
	});
}

export default Component;
