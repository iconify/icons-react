import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5_j0fbgb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5_j0fbgb"/>`,
		"fallback": "garden:arrow-up-box-fill-12",
	});
}

export default Component;
