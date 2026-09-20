import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kytuk_bdw.css';
import '../../css/d/dja34ytyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kytuk_bdw"/><path class="dja34ytyg"/></g>`,
		"fallback": "reicon:inbox-unread-filled",
	});
}

export default Component;
