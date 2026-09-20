import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w4srdrbby.css';
import '../../css/w/wx_54cmmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w4srdrbby"/><path class="wx_54cmmn"/></g>`,
		"fallback": "keyline-icons:alarm-clock-duotone",
	});
}

export default Component;
