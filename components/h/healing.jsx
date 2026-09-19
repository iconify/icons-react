import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjkthvsjg.css';
import '../../css/q/qu789qgwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjkthvsjg"/><path class="qu789qgwh"/>`,
		"fallback": "cil:healing",
	});
}

export default Component;
