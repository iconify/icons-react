import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6q3qci0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6q3qci0s"/>`,
		"fallback": "cil:airplane-mode-off",
	});
}

export default Component;
