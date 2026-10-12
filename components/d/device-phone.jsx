import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyuoj61bc.css';
import '../../css/z/zip0f5bhz.css';
import '../../css/p/p08yfabth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 5.39 22.25)" class="zyuoj61bc"/><rect transform="rotate(-90 5.39 22.25)" class="zip0f5bhz"/><path class="p08yfabth"/></g>`,
		"fallback": "andrsrxn:device-phone",
	});
}

export default Component;
