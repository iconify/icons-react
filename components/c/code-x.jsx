import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e55-w7bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e55-w7bsy"/>`,
		"fallback": "noviair-light:code-x",
	});
}

export default Component;
