import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w4srdrbby.css';
import '../../css/z/zozuh9mlc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w4srdrbby"/><path class="zozuh9mlc"/></g>`,
		"fallback": "keyline-icons:alarm-clock-check-two-tone",
	});
}

export default Component;
