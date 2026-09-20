import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-6r57b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-6r57b2z"/>`,
		"fallback": "simple-icons:gitpod",
	});
}

export default Component;
