import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v70bcyn7c.css';
import '../../css/c/ck67tjbal.css';
import '../../css/f/f4iuaiu1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v70bcyn7c wm-k"/><path class="ck67tjbal wm-a"/><path class="f4iuaiu1o wm-s"/></g>`,
		"fallback": "withicons:gulal-gloss",
	});
}

export default Component;
