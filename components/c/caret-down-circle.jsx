import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2ob06b2q.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2ob06b2q"/>`,
		"fallback": "zmdi:caret-down-circle",
	});
}

export default Component;
