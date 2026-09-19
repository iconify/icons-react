import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yem4isb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yem4isb5e"/>`,
		"fallback": "boxicons:dock-top-left",
	});
}

export default Component;
