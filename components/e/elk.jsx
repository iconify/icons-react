import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up2pgbbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up2pgbbza"/>`,
		"fallback": "simple-icons:elk",
	});
}

export default Component;
