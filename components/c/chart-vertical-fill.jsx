import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo8y5cbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo8y5cbqf"/>`,
		"fallback": "mingcute:chart-vertical-fill",
	});
}

export default Component;
