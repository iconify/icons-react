import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz946rb6e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz946rb6e"/>`,
		"fallback": "f7:gift",
	});
}

export default Component;
