import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgrasfbvw.css';
import '../../css/e/ee3wzbb6u.css';
import '../../css/j/j8i9ym6gy.css';
import '../../css/n/nrsq3lpkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cgrasfbvw"/><path class="ee3wzbb6u"/><path class="j8i9ym6gy"/><path class="nrsq3lpkn"/></g>`,
		"fallback": "andrsrxn:chair",
	});
}

export default Component;
