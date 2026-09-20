import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8spf51jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8spf51jx"/>`,
		"fallback": "streamline-ultimate:book-star-bold",
	});
}

export default Component;
