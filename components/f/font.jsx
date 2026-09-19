import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2-3fe2ip.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2-3fe2ip"/>`,
		"fallback": "zmdi:font",
	});
}

export default Component;
