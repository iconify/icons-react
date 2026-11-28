import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hq7fs4bcl.css';
import '../../css/n/nbm_dow0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hq7fs4bcl secondary"/><path class="nbm_dow0l primary"/></g>`,
		"fallback": "iconaut:book-copy-duotone",
	});
}

export default Component;
