import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2-hc7e0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2-hc7e0a"/>`,
		"fallback": "cbi:fritz-repeater",
	});
}

export default Component;
