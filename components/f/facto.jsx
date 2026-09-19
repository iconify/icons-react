import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap3nt-pxe.css';

const viewBox = {"width":464,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap3nt-pxe"/>`,
		"fallback": "ps:facto",
	});
}

export default Component;
