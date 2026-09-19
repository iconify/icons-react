import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v739xof3h.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v739xof3h"/>`,
		"fallback": "fa6-solid:indian-rupee-sign",
	});
}

export default Component;
