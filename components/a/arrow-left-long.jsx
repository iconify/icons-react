import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e30u10b9n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e30u10b9n"/>`,
		"fallback": "fa6-solid:arrow-left-long",
	});
}

export default Component;
