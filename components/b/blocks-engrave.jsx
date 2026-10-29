import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r8f1pibxd.css';
import '../../css/y/y73rrwria.css';
import '../../css/c/cfp4t-bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r8f1pibxd"/><path class="wm-shadow y73rrwria"/><path class="cfp4t-bfv"/></g>`,
		"fallback": "withicons:blocks-engrave",
	});
}

export default Component;
