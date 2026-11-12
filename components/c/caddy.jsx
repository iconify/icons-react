import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8tbmnbml.css';
import '../../css/k/k-c9kibht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8tbmnbml"/><path class="k-c9kibht"/>`,
		"fallback": "selfhst:caddy",
	});
}

export default Component;
