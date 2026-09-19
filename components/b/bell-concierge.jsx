import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn7_n2bfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn7_n2bfr"/>`,
		"fallback": "fa6-solid:bell-concierge",
	});
}

export default Component;
