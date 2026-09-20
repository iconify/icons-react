import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygfchdbyw.css';
import '../../css/m/m8tud7b8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygfchdbyw"/><path class="m8tud7b8r"/>`,
		"fallback": "selfhst:frappe-books",
	});
}

export default Component;
