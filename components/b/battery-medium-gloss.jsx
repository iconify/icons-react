import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jsgqsvxfx.css';
import '../../css/f/flo-j1bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jsgqsvxfx wm-k"/><path class="flo-j1bdq wm-a"/></g>`,
		"fallback": "withicons:battery-medium-gloss",
	});
}

export default Component;
