import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnq2l7byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnq2l7byw"/>`,
		"fallback": "ri:crosshair-line",
	});
}

export default Component;
