import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc4hr0b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc4hr0b4r"/>`,
		"fallback": "mingcute:circle-fading-arrow-up-fill",
	});
}

export default Component;
