import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv6irtb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv6irtb9r"/>`,
		"fallback": "iconamoon:arrow-left-3-square",
	});
}

export default Component;
