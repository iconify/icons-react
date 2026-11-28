import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ely0vkp6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ely0vkp6u"/>`,
		"fallback": "noviair-light:bar-chart",
	});
}

export default Component;
