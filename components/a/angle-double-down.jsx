import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa8fp8b1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa8fp8b1o"/>`,
		"fallback": "uit:angle-double-down",
	});
}

export default Component;
