import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg7s-p90e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg7s-p90e"/>`,
		"fallback": "andrsrxn:chevron-up-double",
	});
}

export default Component;
