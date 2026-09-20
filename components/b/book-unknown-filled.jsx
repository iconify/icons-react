import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0me2lblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0me2lblh"/>`,
		"fallback": "tdesign:book-unknown-filled",
	});
}

export default Component;
