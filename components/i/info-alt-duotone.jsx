import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ausn2xbpq.css';
import '../../css/t/t9subcb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="matrix(-1 0 0 1 20 4)" class="ausn2xbpq"/><path class="t9subcb1l"/></g>`,
		"fallback": "lets-icons:info-alt-duotone",
	});
}

export default Component;
