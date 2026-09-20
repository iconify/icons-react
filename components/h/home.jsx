import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32an4f6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32an4f6e"/>`,
		"fallback": "subway:home",
	});
}

export default Component;
