import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw5g0xbil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw5g0xbil"/>`,
		"fallback": "fa-solid:arrows-alt",
	});
}

export default Component;
