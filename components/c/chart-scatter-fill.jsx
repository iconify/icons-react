import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oub0p0bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oub0p0bqt"/>`,
		"fallback": "mingcute:chart-scatter-fill",
	});
}

export default Component;
