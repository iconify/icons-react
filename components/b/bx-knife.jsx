import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn84b3bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn84b3bex"/>`,
		"fallback": "bx:bx-knife",
	});
}

export default Component;
