import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azxds7xuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azxds7xuy"/>`,
		"fallback": "eva:flash-off-outline",
	});
}

export default Component;
