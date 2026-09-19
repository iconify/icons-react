import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ompke7h3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ompke7h3h"/>`,
		"fallback": "hugeicons:gallery-vertical-end",
	});
}

export default Component;
