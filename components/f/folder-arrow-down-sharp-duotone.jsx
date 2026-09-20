import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hskg5cwll.css';
import '../../css/m/mmbxx9boa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hskg5cwll"/><path class="mmbxx9boa"/></g>`,
		"fallback": "keyline-icons:folder-arrow-down-sharp-duotone",
	});
}

export default Component;
