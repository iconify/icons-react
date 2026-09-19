import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7ugyti7o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7ugyti7o"/>`,
		"fallback": "bi:dpad-fill",
	});
}

export default Component;
