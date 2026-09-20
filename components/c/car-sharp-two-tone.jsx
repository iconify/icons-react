import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s5mng-f5a.css';
import '../../css/e/es92htbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s5mng-f5a"/><path class="es92htbbc"/></g>`,
		"fallback": "keyline-icons:car-sharp-two-tone",
	});
}

export default Component;
