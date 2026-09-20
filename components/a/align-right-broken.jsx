import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uvbc2lbfi.css';
import '../../css/o/ohys8lu6y.css';
import '../../css/j/j6ohuicfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uvbc2lbfi"/><path class="ohys8lu6y"/><path class="j6ohuicfp"/></g>`,
		"fallback": "solar:align-right-broken",
	});
}

export default Component;
