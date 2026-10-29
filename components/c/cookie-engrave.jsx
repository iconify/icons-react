import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q1lwn9b1v.css';
import '../../css/n/njjzi6bxs.css';
import '../../css/p/prwrr3loe.css';
import '../../css/a/a8rtq7b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q1lwn9b1v wm-k"/><path class="njjzi6bxs wm-shadow"/><path class="prwrr3loe wm-k"/><path class="a8rtq7b8k wm-a"/></g>`,
		"fallback": "withicons:cookie-engrave",
	});
}

export default Component;
