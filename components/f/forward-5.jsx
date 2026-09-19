import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2s2ztbpx.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2s2ztbpx"/>`,
		"fallback": "zmdi:forward-5",
	});
}

export default Component;
