import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyhrs9bfj.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyhrs9bfj"/>`,
		"fallback": "zmdi:alert-circle-o",
	});
}

export default Component;
