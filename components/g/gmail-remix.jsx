import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duf9j9bxy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="duf9j9bxy"/>`,
		"fallback": "streamline:gmail-remix",
	});
}

export default Component;
