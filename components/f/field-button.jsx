import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ypq1_laab.css';
import '../../css/l/lv20mzbkr.css';
import '../../css/c/cwzzs50qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 18.76 19.12)" class="ypq1_laab"/><rect transform="matrix(0 -1 -1 0 18.76 19.12)" class="lv20mzbkr"/><path class="cwzzs50qu"/></g>`,
		"fallback": "andrsrxn:field-button",
	});
}

export default Component;
