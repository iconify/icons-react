import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/z/zo1j5yy1s.css';
import '../../css/l/lya_i4b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lxnzn9nmw"/><path class="zo1j5yy1s"/><path class="lya_i4b_z"/></g>`,
		"fallback": "solar:creative-commons-line-duotone",
	});
}

export default Component;
