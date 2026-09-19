import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4k4ixbdj.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4k4ixbdj"/>`,
		"fallback": "zmdi:google-earth",
	});
}

export default Component;
