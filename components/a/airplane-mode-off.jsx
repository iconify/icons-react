import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im7wiu58z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im7wiu58z"/>`,
		"fallback": "hugeicons:airplane-mode-off",
	});
}

export default Component;
