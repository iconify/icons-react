import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0sk24kwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0sk24kwi"/>`,
		"fallback": "mdi:battery-90",
	});
}

export default Component;
