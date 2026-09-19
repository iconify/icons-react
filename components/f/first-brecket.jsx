import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j284f22vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j284f22vx"/>`,
		"fallback": "hugeicons:first-brecket",
	});
}

export default Component;
