import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy6_4mxhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy6_4mxhf"/>`,
		"fallback": "hugeicons:egg",
	});
}

export default Component;
