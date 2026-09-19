import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srimpbbiz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srimpbbiz"/>`,
		"fallback": "fa6-solid:face-tired",
	});
}

export default Component;
