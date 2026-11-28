import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkz3gtb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkz3gtb6d primary"/>`,
		"fallback": "iconaut:arrow-down-through-line-duotone",
	});
}

export default Component;
