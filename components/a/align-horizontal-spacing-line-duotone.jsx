import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n9enzdlcb.css';
import '../../css/o/onkbx6e0j.css';
import '../../css/y/y-18oobhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n9enzdlcb"/><path class="onkbx6e0j"/><path class="y-18oobhf"/></g>`,
		"fallback": "solar:align-horizontal-spacing-line-duotone",
	});
}

export default Component;
