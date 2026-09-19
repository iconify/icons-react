import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc0sti72g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc0sti72g"/>`,
		"fallback": "hugeicons:bitcoin",
	});
}

export default Component;
