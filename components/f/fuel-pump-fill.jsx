import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5ahj8bxy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5ahj8bxy"/>`,
		"fallback": "bi:fuel-pump-fill",
	});
}

export default Component;
