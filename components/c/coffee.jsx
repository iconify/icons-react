import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkql8mg2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkql8mg2z"/>`,
		"fallback": "ci:coffee",
	});
}

export default Component;
