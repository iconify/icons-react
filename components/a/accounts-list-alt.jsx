import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3muasauf.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3muasauf"/>`,
		"fallback": "zmdi:accounts-list-alt",
	});
}

export default Component;
