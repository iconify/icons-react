import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er2fz3ono.css';
import '../../css/l/lwb5t-h6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er2fz3ono"/><path class="lwb5t-h6o"/>`,
		"fallback": "ion:earth-outline",
	});
}

export default Component;
