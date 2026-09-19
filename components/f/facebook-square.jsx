import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl24r7i0p.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl24r7i0p"/>`,
		"fallback": "fa-brands:facebook-square",
	});
}

export default Component;
