import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu-65jynz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu-65jynz"/>`,
		"fallback": "iconamoon:arrow-up-2-bold",
	});
}

export default Component;
