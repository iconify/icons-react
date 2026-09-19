import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdz-l3bia.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdz-l3bia"/>`,
		"fallback": "garden:align-left-fill-12",
	});
}

export default Component;
