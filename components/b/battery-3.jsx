import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwpcakq3y.css';
import '../../css/h/h0r0o6bjk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwpcakq3y"/><path class="h0r0o6bjk"/>`,
		"fallback": "cil:battery-3",
	});
}

export default Component;
