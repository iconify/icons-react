import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mssa0nb-o.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mssa0nb-o"/>`,
		"fallback": "zmdi:globe-alt",
	});
}

export default Component;
