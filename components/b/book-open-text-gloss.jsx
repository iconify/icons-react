import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd-u4ybzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd-u4ybzr"/>`,
		"fallback": "withicons:book-open-text-gloss",
	});
}

export default Component;
