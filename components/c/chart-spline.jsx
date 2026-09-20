import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v546l5z9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v546l5z9v"/>`,
		"fallback": "keyline-icons:chart-spline",
	});
}

export default Component;
