import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn7l3uo8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn7l3uo8l"/>`,
		"fallback": "mdi:eye-tick",
	});
}

export default Component;
