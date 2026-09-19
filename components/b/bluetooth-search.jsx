import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5lrvcctm.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5lrvcctm"/>`,
		"fallback": "zmdi:bluetooth-search",
	});
}

export default Component;
