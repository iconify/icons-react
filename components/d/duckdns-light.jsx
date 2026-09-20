import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozh_-hb7i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozh_-hb7i"/>`,
		"fallback": "selfhst:duckdns-light",
	});
}

export default Component;
