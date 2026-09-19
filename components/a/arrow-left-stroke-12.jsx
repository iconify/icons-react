import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zidxgwc3e.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zidxgwc3e"/>`,
		"fallback": "garden:arrow-left-stroke-12",
	});
}

export default Component;
