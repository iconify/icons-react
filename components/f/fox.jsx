import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laisf1b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laisf1b7w"/>`,
		"fallback": "noviair-light:fox",
	});
}

export default Component;
