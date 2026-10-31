import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gv7w71ggr.css';
import '../../css/g/g5291rc1t.css';
import '../../css/i/i-0pe7g4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gv7w71ggr wm-k"/><path class="g5291rc1t wm-a"/><path class="i-0pe7g4j wm-s"/></g>`,
		"fallback": "withicons:battery-charging-gloss",
	});
}

export default Component;
