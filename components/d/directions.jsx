import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxc68snwp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxc68snwp"/>`,
		"fallback": "fa-solid:directions",
	});
}

export default Component;
