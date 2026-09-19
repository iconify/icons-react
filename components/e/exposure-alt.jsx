import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um91gjswm.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um91gjswm"/>`,
		"fallback": "zmdi:exposure-alt",
	});
}

export default Component;
