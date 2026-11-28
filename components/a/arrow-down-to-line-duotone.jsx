import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2pk00b7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2pk00b7t primary"/>`,
		"fallback": "iconaut:arrow-down-to-line-duotone",
	});
}

export default Component;
