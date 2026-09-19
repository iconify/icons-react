import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldlei_y_m.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldlei_y_m"/>`,
		"fallback": "zmdi:cloud-outline-alt",
	});
}

export default Component;
