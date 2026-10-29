import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qpl6hxb8w.css';
import '../../css/j/ji6eupbux.css';
import '../../css/y/y63n77z1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qpl6hxb8w"/><path class="ji6eupbux wm-shadow"/><path class="y63n77z1t"/></g>`,
		"fallback": "withicons:gift-stack-engrave",
	});
}

export default Component;
