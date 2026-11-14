import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy8l88k7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy8l88k7z"/>`,
		"fallback": "hugeicons:bookmark-remove-02",
	});
}

export default Component;
