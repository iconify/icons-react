import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixw-142ey.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixw-142ey"/>`,
		"fallback": "zmdi:account-box-phone",
	});
}

export default Component;
