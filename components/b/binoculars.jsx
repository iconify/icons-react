import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku_b133lm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku_b133lm"/>`,
		"fallback": "temaki:binoculars",
	});
}

export default Component;
