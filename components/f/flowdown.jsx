import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_xpt5bbt.css';

const viewBox = {"width":1024,"height":833};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_xpt5bbt"/>`,
		"fallback": "whh:flowdown",
	});
}

export default Component;
