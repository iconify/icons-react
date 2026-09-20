import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1_i3l3vn.css';
import '../../css/m/m5lp6jbuo.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1_i3l3vn"/><path class="m5lp6jbuo"/>`,
		"fallback": "selfhst:domain-watchdog-light",
	});
}

export default Component;
