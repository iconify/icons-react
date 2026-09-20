import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce5k8p2hr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce5k8p2hr"/>`,
		"fallback": "ri:home-4-fill",
	});
}

export default Component;
