import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snk5pxbny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snk5pxbny"/>`,
		"fallback": "fa-brands:bitcoin",
	});
}

export default Component;
