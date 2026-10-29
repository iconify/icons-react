import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kpdz4ob1q.css';
import '../../css/r/rhd6e4bca.css';
import '../../css/t/tvpy8lbvs.css';
import '../../css/z/zmg2--rqo.css';
import '../../css/n/n3uj-sb8b.css';
import '../../css/n/nm-zfdc4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="kpdz4ob1q wm-shadow"/><path class="rhd6e4bca"/><path class="tvpy8lbvs"/><path class="zmg2--rqo"/><path class="n3uj-sb8b wm-shine"/><path class="nm-zfdc4r wm-deco"/></g>`,
		"fallback": "withicons-sticker:corner-up-left",
	});
}

export default Component;
