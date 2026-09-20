import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sou-m7bza.css';
import '../../css/f/fq-j5xbdj.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/c/c30ycsbbv.css';
import '../../css/c/cey7jel6s.css';
import '../../css/u/uaqjrwbxu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/b/bj2da_b3x.css';
import '../../css/w/w1tv6q06k.css';
import '../../css/k/kzgh3bkpn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sou-m7bza"/><path class="fq-j5xbdj"/><g class="x4u8pbwjc"><path class="c30ycsbbv"/><path class="cey7jel6s"/><circle class="uaqjrwbxu"/></g><g class="jn8qy4bru"><path class="bj2da_b3x"/><path class="w1tv6q06k"/><path class="kzgh3bkpn"/></g>`,
		"fallback": "openmoji:evacuate-vertical",
	});
}

export default Component;
