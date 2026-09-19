import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn_x731ei.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn_x731ei"/>`,
		"fallback": "garden:at-stroke-12",
	});
}

export default Component;
