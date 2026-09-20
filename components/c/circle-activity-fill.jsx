import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khw0c7fxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khw0c7fxm"/>`,
		"fallback": "keyline-icons:circle-activity-fill",
	});
}

export default Component;
