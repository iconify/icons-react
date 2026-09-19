import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytwuz5yos.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytwuz5yos"/>`,
		"fallback": "zmdi:info-outline",
	});
}

export default Component;
