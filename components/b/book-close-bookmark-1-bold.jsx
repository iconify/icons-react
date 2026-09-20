import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhy-5k__b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhy-5k__b"/>`,
		"fallback": "streamline-ultimate:book-close-bookmark-1-bold",
	});
}

export default Component;
