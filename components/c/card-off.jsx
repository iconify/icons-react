import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxc_y7qso.css';

const viewBox = {"width":400,"height":424};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxc_y7qso"/>`,
		"fallback": "zmdi:card-off",
	});
}

export default Component;
