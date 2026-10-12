import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/k/khdkximwp.css';
import '../../css/c/c3160bbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="khdkximwp"/><path class="c3160bbgs"/></g>`,
		"fallback": "andrsrxn:ball-billiard",
	});
}

export default Component;
