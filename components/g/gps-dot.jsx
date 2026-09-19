import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5yh1abav.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5yh1abav"/>`,
		"fallback": "zmdi:gps-dot",
	});
}

export default Component;
