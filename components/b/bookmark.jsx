import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q239t9bzw.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q239t9bzw"/>`,
		"fallback": "fa-solid:bookmark",
	});
}

export default Component;
