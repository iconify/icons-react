import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1mimobpd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1mimobpd"/>`,
		"fallback": "garden:heart-fill-12",
	});
}

export default Component;
