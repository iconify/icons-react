import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4z4z2_dv.css';

const viewBox = {"width":384,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4z4z2_dv"/>`,
		"fallback": "zmdi:badge-check",
	});
}

export default Component;
