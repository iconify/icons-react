import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dcfg1ck_a.css';
import '../../css/r/rsp9ttbii.css';
import '../../css/n/n1y1i5mpe.css';
import '../../css/j/j9dowbjkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dcfg1ck_a wm-shadow"/><path class="rsp9ttbii wm-shadow"/><path class="n1y1i5mpe"/><path class="j9dowbjkc"/></g>`,
		"fallback": "withicons-brutal:cloud-snow",
	});
}

export default Component;
