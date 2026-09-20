import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x35xwlb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x35xwlb8d"/>`,
		"fallback": "solar:headphones-round-bold",
	});
}

export default Component;
