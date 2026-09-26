import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u31qxkjlo.css';
import '../../css/r/rsz-fgbhv.css';
import '../../css/d/dr1qdzm2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u31qxkjlo"/><path class="rsz-fgbhv"/><path class="dr1qdzm2w"/></g>`,
		"fallback": "solar:chat-round-quote-outline",
	});
}

export default Component;
