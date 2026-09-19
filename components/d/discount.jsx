import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6fv6ubfm.css';
import '../../css/w/wns-j0bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6fv6ubfm"/><path class="wns-j0bej"/>`,
		"fallback": "boxicons:discount",
	});
}

export default Component;
