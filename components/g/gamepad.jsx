import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcoduql6c.css';
import '../../css/r/rdd3p3upc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcoduql6c"/><path class="rdd3p3upc"/>`,
		"fallback": "cil:gamepad",
	});
}

export default Component;
