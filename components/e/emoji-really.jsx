import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hro-8ebhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hro-8ebhh"/>`,
		"fallback": "iconoir:emoji-really",
	});
}

export default Component;
