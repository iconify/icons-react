import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ycblutb9m.css';
import '../../css/q/qsol-zb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k ycblutb9m"/><path class="qsol-zb_f wm-a"/></g>`,
		"fallback": "withicons:copy-gloss",
	});
}

export default Component;
