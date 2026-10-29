import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kl36rlvot.css';
import '../../css/y/y6m9ydbrm.css';
import '../../css/b/b1ti3cxbu.css';
import '../../css/l/lq_cp1bfu.css';
import '../../css/d/dp9ap3b7v.css';
import '../../css/y/ywgqm0b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kl36rlvot wm-k"/><path class="wm-a y6m9ydbrm"/><path class="b1ti3cxbu wm-shadow"/><path class="lq_cp1bfu wm-k"/><path class="dp9ap3b7v wm-k"/><path class="wm-a ywgqm0b7b"/></g>`,
		"fallback": "withicons:dhak-engrave",
	});
}

export default Component;
