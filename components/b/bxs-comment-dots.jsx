import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk9hjzb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk9hjzb6f"/>`,
		"fallback": "bx:bxs-comment-dots",
	});
}

export default Component;
