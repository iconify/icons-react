import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p1d1xqfpi.css';
import '../../css/r/ri-cmgb7b.css';
import '../../css/s/shkjd1brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p1d1xqfpi"/><path class="ri-cmgb7b wm-shadow"/><path class="shkjd1brf"/></g>`,
		"fallback": "withicons:chevrons-up-down-engrave",
	});
}

export default Component;
