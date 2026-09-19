import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv84cpbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv84cpbay"/>`,
		"fallback": "ci:arrow-up-right-lg",
	});
}

export default Component;
