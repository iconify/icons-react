import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3w5-xb3l.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3w5-xb3l"/>`,
		"fallback": "zmdi:center-focus-strong",
	});
}

export default Component;
