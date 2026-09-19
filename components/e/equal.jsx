import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otu6l8b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otu6l8b_y"/>`,
		"fallback": "hugeicons:equal",
	});
}

export default Component;
