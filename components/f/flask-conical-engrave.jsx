import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c-z4wj6nw.css';
import '../../css/f/fozni9buu.css';
import '../../css/z/zxdihacgb.css';
import '../../css/n/n-07r-b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c-z4wj6nw wm-k"/><path class="fozni9buu wm-shadow"/><path class="wm-k zxdihacgb"/><path class="n-07r-b5s wm-a"/></g>`,
		"fallback": "withicons:flask-conical-engrave",
	});
}

export default Component;
