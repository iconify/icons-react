import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h50wn0ccf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h50wn0ccf"/>`,
		"fallback": "mdi:human-female",
	});
}

export default Component;
