import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkwz5233h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkwz5233h"/>`,
		"fallback": "fad:bluetooth",
	});
}

export default Component;
