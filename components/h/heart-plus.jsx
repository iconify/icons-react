import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8n6rmbln.css';
import '../../css/n/nc-nr7brk.css';
import '../../css/m/m9h9rt94u.css';
import '../../css/n/n9r2orwrm.css';
import '../../css/e/edra2bcuv.css';
import '../../css/f/fnffbuwum.css';
import '../../css/j/j-eqg7enp.css';
import '../../css/r/r532knxin.css';
import '../../css/n/npqvgdhfb.css';
import '../../css/p/p4sfbwb6e.css';
import '../../css/k/kjdqo2bgw.css';
import '../../css/p/pe6drb3tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8n6rmbln wm-shadow"/><path class="nc-nr7brk wm-k"/><path class="m9h9rt94u wm-k"/><path class="n9r2orwrm wm-k"/><path class="edra2bcuv wm-k"/><path class="fnffbuwum wm-shine"/><path class="j-eqg7enp wm-k"/><path class="r532knxin wm-s"/><path class="npqvgdhfb wm-s"/><path class="p4sfbwb6e wm-s"/><path class="kjdqo2bgw wm-s"/><path class="pe6drb3tr wm-s"/>`,
		"fallback": "withicons-plush:heart-plus",
	});
}

export default Component;
