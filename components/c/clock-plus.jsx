import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezt1q3b6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezt1q3b6u"/>`,
		"fallback": "noviair-light:clock-plus",
	});
}

export default Component;
