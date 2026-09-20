import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i8utatbio.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/u/un-u7xpwr.css';
import '../../css/r/ros5bvrws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i8utatbio"/><path class="x-1lf64uh"/><path class="un-u7xpwr"/><path class="ros5bvrws"/></g>`,
		"fallback": "solar:full-screen-line-duotone",
	});
}

export default Component;
