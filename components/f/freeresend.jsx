import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff5t4wldt.css';
import '../../css/n/ng743gb9u.css';
import '../../css/x/x8brv2t3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff5t4wldt"/><path class="ng743gb9u"/><path class="x8brv2t3t"/>`,
		"fallback": "selfhst:freeresend",
	});
}

export default Component;
