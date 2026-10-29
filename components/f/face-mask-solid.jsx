import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wg3_g8b9x.css';
import '../../css/l/lpiqk9bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wg3_g8b9x"/><path class="lpiqk9bvy wm-a"/></g>`,
		"fallback": "withicons:face-mask-solid",
	});
}

export default Component;
