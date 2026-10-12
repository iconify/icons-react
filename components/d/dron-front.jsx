import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af80hsbam.css';
import '../../css/w/wdums2bxu.css';
import '../../css/n/n3ezsdbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 15.5 14.53)" class="af80hsbam"/><rect transform="matrix(0 -1 -1 0 15.5 14.53)" class="wdums2bxu"/><path class="n3ezsdbwd"/></g>`,
		"fallback": "andrsrxn:dron-front",
	});
}

export default Component;
