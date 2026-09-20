import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/ygul10psw.css';
import '../../css/w/w_sg-8h8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ygul10psw"/><path class="w_sg-8h8x"/></g>`,
		"fallback": "keyline-icons:app-minus-sharp-duotone",
	});
}

export default Component;
