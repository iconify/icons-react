import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uthr8pbrw.css';
import '../../css/e/etu1ebctc.css';
import '../../css/h/hkrmm-ron.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uthr8pbrw"/><path class="etu1ebctc"/><path class="hkrmm-ron"/></g>`,
		"fallback": "andrsrxn:earbuds-x",
	});
}

export default Component;
