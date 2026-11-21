import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/x/xju0yeq6f.css';
import '../../css/j/jcughzujx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="xju0yeq6f"/><path class="jcughzujx"/></g>`,
		"fallback": "andrsrxn:currency-circle-out",
	});
}

export default Component;
