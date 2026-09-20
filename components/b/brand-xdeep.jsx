import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8ns9qbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8ns9qbmj"/>`,
		"fallback": "tabler:brand-xdeep",
	});
}

export default Component;
