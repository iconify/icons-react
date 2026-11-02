import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj5ih3bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj5ih3bxd"/>`,
		"fallback": "mingcute:attachment-2-line",
	});
}

export default Component;
