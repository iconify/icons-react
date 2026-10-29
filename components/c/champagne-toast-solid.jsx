import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fo72_tbbp.css';
import '../../css/r/r2op6tb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fo72_tbbp"/><path class="r2op6tb-f wm-s"/></g>`,
		"fallback": "withicons:champagne-toast-solid",
	});
}

export default Component;
