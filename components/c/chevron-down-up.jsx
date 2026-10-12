import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yym0m6b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yym0m6b5h"/>`,
		"fallback": "andrsrxn:chevron-down-up",
	});
}

export default Component;
