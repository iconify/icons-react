import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhwy45r_r.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhwy45r_r"/>`,
		"fallback": "pullo:border-none-thin",
	});
}

export default Component;
