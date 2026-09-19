import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nicvw8b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nicvw8b7c"/>`,
		"fallback": "cbi:btg",
	});
}

export default Component;
