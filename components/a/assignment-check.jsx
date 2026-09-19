import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuhqe4wvc.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuhqe4wvc"/>`,
		"fallback": "zmdi:assignment-check",
	});
}

export default Component;
