import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee2rqwbxd.css';
import '../../css/p/pgabhk2zo.css';
import '../../css/v/vdu6k2bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ee2rqwbxd"/><path class="pgabhk2zo"/><path class="vdu6k2bug"/></g>`,
		"fallback": "andrsrxn:book-heart",
	});
}

export default Component;
