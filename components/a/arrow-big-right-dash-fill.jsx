import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwtugtb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwtugtb3d"/>`,
		"fallback": "mingcute:arrow-big-right-dash-fill",
	});
}

export default Component;
