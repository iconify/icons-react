import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co_pena6k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co_pena6k"/>`,
		"fallback": "zmdi:format-color-fill",
	});
}

export default Component;
