import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1w90i-5m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1w90i-5m"/>`,
		"fallback": "garden:clipboard-check-stroke-12",
	});
}

export default Component;
