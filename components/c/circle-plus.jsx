import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz3k9hb8j.css';
import '../../css/y/yl2xz9yma.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz3k9hb8j"/><path class="yl2xz9yma"/>`,
		"fallback": "lineicons:circle-plus",
	});
}

export default Component;
