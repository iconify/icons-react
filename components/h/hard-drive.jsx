import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8hninb9v.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8hninb9v"/>`,
		"fallback": "ps:hard-drive",
	});
}

export default Component;
