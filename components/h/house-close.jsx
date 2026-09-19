import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k59jp2z-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k59jp2z-z"/>`,
		"fallback": "ci:house-close",
	});
}

export default Component;
