import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlo9yhbby.css';
import '../../css/c/cfzd0abea.css';
import '../../css/i/img1fac4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlo9yhbby"/><path class="cfzd0abea"/><path class="img1fac4o"/></g>`,
		"fallback": "andrsrxn:file-signature",
	});
}

export default Component;
