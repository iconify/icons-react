import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi2dzkbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi2dzkbac"/>`,
		"fallback": "mingcute:distribute-spacing-horizontal-fill",
	});
}

export default Component;
