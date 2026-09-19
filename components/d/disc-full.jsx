import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkjmmss5d.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkjmmss5d"/>`,
		"fallback": "zmdi:disc-full",
	});
}

export default Component;
