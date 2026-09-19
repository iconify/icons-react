import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc5ow5b6o.css';

const viewBox = {"width":216,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc5ow5b6o"/>`,
		"fallback": "zmdi:caret-down",
	});
}

export default Component;
