import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f963cdb6c.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f963cdb6c"/>`,
		"fallback": "zmdi:card-sd",
	});
}

export default Component;
