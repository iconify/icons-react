import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djfjsab7t.css';
import '../../css/m/mj8r-ibdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djfjsab7t"/><path class="mj8r-ibdx"/>`,
		"fallback": "mingcute:chart-pie-2-fill",
	});
}

export default Component;
