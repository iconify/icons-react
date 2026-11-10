import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtkzsnbie.css';
import '../../css/z/znaikspjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dtkzsnbie"/><path class="znaikspjd"/></g>`,
		"fallback": "andrsrxn:credit-card-out",
	});
}

export default Component;
