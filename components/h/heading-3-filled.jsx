import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg3b3wd3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg3b3wd3z"/>`,
		"fallback": "boxicons:heading-3-filled",
	});
}

export default Component;
