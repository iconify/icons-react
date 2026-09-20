import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmky2sj7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmky2sj7u"/>`,
		"fallback": "selfhst:gluetun-light",
	});
}

export default Component;
