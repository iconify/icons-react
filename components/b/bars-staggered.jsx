import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw0emjb5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw0emjb5c"/>`,
		"fallback": "fa6-solid:bars-staggered",
	});
}

export default Component;
