import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fisa5lzox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fisa5lzox"/>`,
		"fallback": "thesvg:hyperskill",
	});
}

export default Component;
