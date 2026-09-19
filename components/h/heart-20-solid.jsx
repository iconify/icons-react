import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc_t3srcp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc_t3srcp"/>`,
		"fallback": "heroicons:heart-20-solid",
	});
}

export default Component;
