import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vy2wytbil.css';
import '../../css/u/uthr8pbrw.css';
import '../../css/e/etu1ebctc.css';
import '../../css/f/flk6neb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vy2wytbil"/><path class="uthr8pbrw"/><path class="etu1ebctc"/><path class="flk6neb8l"/></g>`,
		"fallback": "andrsrxn:earbuds-lightning",
	});
}

export default Component;
