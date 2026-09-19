import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkaybslkf.css';

const viewBox = {"width":488,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkaybslkf"/>`,
		"fallback": "zmdi:grid-off",
	});
}

export default Component;
