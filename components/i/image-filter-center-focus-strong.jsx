import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfxy0ht-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfxy0ht-k"/>`,
		"fallback": "mdi:image-filter-center-focus-strong",
	});
}

export default Component;
