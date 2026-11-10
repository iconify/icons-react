import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cwtjd2xxi.css';
import '../../css/j/j7seo5f7t.css';
import '../../css/d/dtkzsnbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cwtjd2xxi"/><path class="j7seo5f7t"/><path class="dtkzsnbie"/></g>`,
		"fallback": "andrsrxn:credit-card-in",
	});
}

export default Component;
