import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb0t6_b-j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb0t6_b-j"/>`,
		"fallback": "garden:check-lg-stroke-12",
	});
}

export default Component;
