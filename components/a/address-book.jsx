import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fojojjb2w.css';
import '../../css/w/wx75znbwu.css';
import '../../css/y/y2wn9tq8k.css';
import '../../css/h/hdc9fmxre.css';
import '../../css/d/d1a6ddnps.css';
import '../../css/k/keg34_bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="fojojjb2w"><path class="wm-shadow wx75znbwu"/><path class="wm-shadow y2wn9tq8k"/><path class="hdc9fmxre wm-k"/><path class="d1a6ddnps wm-k"/><path class="keg34_bvo wm-a"/></g>`,
		"fallback": "withicons-brutal:address-book",
	});
}

export default Component;
