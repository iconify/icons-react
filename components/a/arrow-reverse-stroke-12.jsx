import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc9_1yu8e.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc9_1yu8e"/>`,
		"fallback": "garden:arrow-reverse-stroke-12",
	});
}

export default Component;
