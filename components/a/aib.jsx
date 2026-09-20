import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvpar1b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvpar1b3p"/>`,
		"fallback": "thesvg-color:aib",
	});
}

export default Component;
