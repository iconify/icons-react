import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nrz63xv5c.css';
import '../../css/s/shxbccb1f.css';
import '../../css/l/lxnzn9nmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nrz63xv5c"/><path class="shxbccb1f"/><path class="lxnzn9nmw"/></g>`,
		"fallback": "solar:download-square-line-duotone",
	});
}

export default Component;
