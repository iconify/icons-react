import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz1n0-axz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz1n0-axz"/>`,
		"fallback": "streamline:command",
	});
}

export default Component;
