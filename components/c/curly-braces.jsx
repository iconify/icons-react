import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygghon35o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygghon35o"/>`,
		"fallback": "majesticons:curly-braces",
	});
}

export default Component;
