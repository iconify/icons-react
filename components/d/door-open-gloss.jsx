import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qbglx958f.css';
import '../../css/m/mqu_ic34j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qbglx958f wm-k"/><path class="mqu_ic34j wm-a"/></g>`,
		"fallback": "withicons:door-open-gloss",
	});
}

export default Component;
