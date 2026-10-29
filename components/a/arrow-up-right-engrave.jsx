import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g7jnqr6_z.css';
import '../../css/q/q8e5v33pe.css';
import '../../css/w/wwcy8kijr.css';
import '../../css/b/bu_4u5a3q.css';
import '../../css/k/khppcmayv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g7jnqr6_z wm-k"/><path class="q8e5v33pe wm-a"/><path class="wm-shadow wwcy8kijr"/><path class="bu_4u5a3q wm-k"/><path class="khppcmayv wm-a"/></g>`,
		"fallback": "withicons:arrow-up-right-engrave",
	});
}

export default Component;
