import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxktj5b2u.css';
import '../../css/a/ayxmoubic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxktj5b2u"/><path class="ayxmoubic"/></g>`,
		"fallback": "andrsrxn:box-plus",
	});
}

export default Component;
