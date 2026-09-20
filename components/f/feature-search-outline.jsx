import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm6vyv7bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm6vyv7bn"/>`,
		"fallback": "mdi:feature-search-outline",
	});
}

export default Component;
