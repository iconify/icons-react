import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8amgv6tl.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8amgv6tl"/>`,
		"fallback": "fa6-solid:bridge",
	});
}

export default Component;
