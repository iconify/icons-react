import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dauvqjb1o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dauvqjb1o"/>`,
		"fallback": "garden:chevron-double-left-stroke-12",
	});
}

export default Component;
