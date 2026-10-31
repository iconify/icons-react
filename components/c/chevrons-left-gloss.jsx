import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/arne-0rvx.css';
import '../../css/d/dhnxweb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="arne-0rvx wm-k"/><path class="dhnxweb8b wm-a"/></g>`,
		"fallback": "withicons:chevrons-left-gloss",
	});
}

export default Component;
