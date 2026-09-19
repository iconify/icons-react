import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcu4mj0fs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcu4mj0fs"/>`,
		"fallback": "cil:at",
	});
}

export default Component;
