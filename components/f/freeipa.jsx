import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3zbv3b1e.css';
import '../../css/z/zu9lzmbmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3zbv3b1e"/><path class="zu9lzmbmb"/>`,
		"fallback": "selfhst:freeipa",
	});
}

export default Component;
