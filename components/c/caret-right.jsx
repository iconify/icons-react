import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijwjpyboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijwjpyboq"/>`,
		"fallback": "noviair-light:caret-right",
	});
}

export default Component;
