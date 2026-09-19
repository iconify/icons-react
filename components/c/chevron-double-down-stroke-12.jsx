import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-lmtub9d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-lmtub9d"/>`,
		"fallback": "garden:chevron-double-down-stroke-12",
	});
}

export default Component;
