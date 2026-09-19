import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7xg__z-e.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7xg__z-e"/>`,
		"fallback": "zmdi:globe-lock",
	});
}

export default Component;
