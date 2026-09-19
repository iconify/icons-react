import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5c-sgb4d.css';

const viewBox = {"width":472,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5c-sgb4d"/>`,
		"fallback": "zmdi:collection-case-play",
	});
}

export default Component;
