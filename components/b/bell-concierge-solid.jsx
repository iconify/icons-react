import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m5-85g7nw.css';
import '../../css/f/f5i1749sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m5-85g7nw"/><path class="f5i1749sb wm-a"/></g>`,
		"fallback": "withicons:bell-concierge-solid",
	});
}

export default Component;
