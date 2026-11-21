import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbqohkbac.css';
import '../../css/x/x1ybqzb8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbqohkbac"/><path class="x1ybqzb8g"/>`,
		"fallback": "ion:bag-handle-outline",
	});
}

export default Component;
