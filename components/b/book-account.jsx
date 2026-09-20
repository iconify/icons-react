import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_ro1ngmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_ro1ngmk"/>`,
		"fallback": "mdi:book-account",
	});
}

export default Component;
