import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/oi83abcqf.css';
import '../../css/w/wqmtzgbbi.css';
import '../../css/e/e-rh4-bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="oi83abcqf"/><path class="wqmtzgbbi"/><path class="e-rh4-bqe"/></g>`,
		"fallback": "streamline-logos:instagram-logo-1",
	});
}

export default Component;
