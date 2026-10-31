import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v28zv86aj.css';
import '../../css/r/rtwsgfbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v28zv86aj wm-k"/><path class="rtwsgfbxk wm-a"/></g>`,
		"fallback": "withicons:fingerprint-gloss",
	});
}

export default Component;
