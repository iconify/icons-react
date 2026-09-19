import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyz0h_7-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyz0h_7-h"/>`,
		"fallback": "fa6-solid:fingerprint",
	});
}

export default Component;
