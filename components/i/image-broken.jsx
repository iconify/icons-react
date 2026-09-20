import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfv9sopxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfv9sopxd"/>`,
		"fallback": "ooui:image-broken",
	});
}

export default Component;
