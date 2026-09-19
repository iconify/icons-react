import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk0j2gbem.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk0j2gbem"/>`,
		"fallback": "garden:info-fill-12",
	});
}

export default Component;
