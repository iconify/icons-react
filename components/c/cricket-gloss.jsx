import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w7po3_1af.css';
import '../../css/r/rp69_bbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="w7po3_1af wm-k"/><path class="rp69_bbnw wm-a"/></g>`,
		"fallback": "withicons:cricket-gloss",
	});
}

export default Component;
