import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmxl5mk7h.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmxl5mk7h"/>`,
		"fallback": "zmdi:google-plus",
	});
}

export default Component;
