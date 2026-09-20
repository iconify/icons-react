import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0tsaxl0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0tsaxl0k"/>`,
		"fallback": "sidekickicons:blockquote-solid",
	});
}

export default Component;
