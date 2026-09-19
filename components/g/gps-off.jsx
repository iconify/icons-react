import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlb99pbuf.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlb99pbuf"/>`,
		"fallback": "zmdi:gps-off",
	});
}

export default Component;
