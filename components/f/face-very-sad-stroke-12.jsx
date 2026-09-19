import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt87vo4px.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt87vo4px"/>`,
		"fallback": "garden:face-very-sad-stroke-12",
	});
}

export default Component;
