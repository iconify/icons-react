import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eugxuac1i.css';
import '../../css/l/lt164n9aa.css';
import '../../css/h/h4hdi_nkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eugxuac1i"/><path class="lt164n9aa"/><path class="h4hdi_nkb"/></g>`,
		"fallback": "andrsrxn:file-signature",
	});
}

export default Component;
