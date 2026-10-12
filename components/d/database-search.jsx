import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3w4vb1f.css';
import '../../css/v/v4g02bqkd.css';
import '../../css/j/jiu158igz.css';
import '../../css/e/e8aq4tbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse transform="rotate(-180 12 5.23)" class="pd3w4vb1f"/><path class="v4g02bqkd"/><ellipse transform="rotate(-180 12 5.23)" class="jiu158igz"/><path class="e8aq4tbvm"/></g>`,
		"fallback": "andrsrxn:database-search",
	});
}

export default Component;
