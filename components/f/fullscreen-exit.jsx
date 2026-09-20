import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxhcf7bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxhcf7bea"/>`,
		"fallback": "mdi-light:fullscreen-exit",
	});
}

export default Component;
