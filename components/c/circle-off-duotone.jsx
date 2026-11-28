import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la0tybdob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la0tybdob primary"/>`,
		"fallback": "iconaut:circle-off-duotone",
	});
}

export default Component;
