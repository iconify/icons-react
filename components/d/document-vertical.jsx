import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0vo7tb2u.css';
import '../../css/v/vy9mlrb9v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0vo7tb2u"/><path class="vy9mlrb9v"/>`,
		"fallback": "carbon:document-vertical",
	});
}

export default Component;
