import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u89-i4iqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u89-i4iqd"/>`,
		"fallback": "mdi:book-open-blank-variant-outline",
	});
}

export default Component;
