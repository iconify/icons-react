import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/ygul10psw.css';
import '../../css/o/o9yllcexl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ygul10psw"/><path class="o9yllcexl"/></g>`,
		"fallback": "keyline-icons:app-x-sharp-two-tone",
	});
}

export default Component;
