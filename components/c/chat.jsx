import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4yrinejj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4yrinejj"/>`,
		"fallback": "bi:chat",
	});
}

export default Component;
