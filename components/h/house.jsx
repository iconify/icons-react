import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9ezcf2cc.css';
import '../../css/p/p4tltjbxj.css';
import '../../css/k/kgu4dvfgd.css';
import '../../css/y/yml6dtmfj.css';
import '../../css/p/pvlqidy_m.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/z80fy1blu.css';
import '../../css/w/wvt0g6bha.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9ezcf2cc"/><path class="p4tltjbxj"/><path class="kgu4dvfgd"/><path class="yml6dtmfj"/><path class="pvlqidy_m"/><g class="ij2x_72vy"><path class="z80fy1blu"/><path class="wvt0g6bha"/></g>`,
		"fallback": "openmoji:house",
	});
}

export default Component;
