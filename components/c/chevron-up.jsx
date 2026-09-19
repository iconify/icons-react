import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8zxhs7lc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8zxhs7lc"/>`,
		"fallback": "ion:chevron-up",
	});
}

export default Component;
