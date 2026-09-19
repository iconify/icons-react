import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i47d-_nwm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i47d-_nwm"/>`,
		"fallback": "fa6-solid:face-grin-tongue-squint",
	});
}

export default Component;
