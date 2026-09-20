import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/t09p208gv.css';
import '../../css/u/ux0x1db-q.css';
import '../../css/j/j697l3uzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="t09p208gv"/><path class="ux0x1db-q"/><path class="j697l3uzc"/></g>`,
		"fallback": "streamline-logos:dribbble-logo",
	});
}

export default Component;
