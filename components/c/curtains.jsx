import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8x6l9lic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8x6l9lic"/>`,
		"fallback": "hugeicons:curtains",
	});
}

export default Component;
