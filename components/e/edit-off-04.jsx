import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0_-0zbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0_-0zbfd"/>`,
		"fallback": "hugeicons:edit-off-04",
	});
}

export default Component;
