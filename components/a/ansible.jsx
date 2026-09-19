import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh8u1bb_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh8u1bb_c"/>`,
		"fallback": "file-icons:ansible",
	});
}

export default Component;
