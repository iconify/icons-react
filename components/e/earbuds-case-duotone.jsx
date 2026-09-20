import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y8qxsg89u.css';
import '../../css/t/tpnq1y5ic.css';
import '../../css/t/tr4a1zp4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y8qxsg89u"/><path class="tpnq1y5ic"/><path class="tr4a1zp4d"/></g>`,
		"fallback": "reicon:earbuds-case-duotone",
	});
}

export default Component;
