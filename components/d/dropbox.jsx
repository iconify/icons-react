import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6rrxu8ey.css';

const viewBox = {"width":432,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6rrxu8ey"/>`,
		"fallback": "zmdi:dropbox",
	});
}

export default Component;
