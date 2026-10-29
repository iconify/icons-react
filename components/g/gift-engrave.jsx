import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j7y3a7bgh.css';
import '../../css/s/sliiisb3g.css';
import '../../css/v/v8clh90yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j7y3a7bgh"/><path class="sliiisb3g wm-shadow"/><path class="v8clh90yn"/></g>`,
		"fallback": "withicons:gift-engrave",
	});
}

export default Component;
