import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkovvsv-o.css';
import '../../css/p/prf1umqmd.css';
import '../../css/f/feqanpbty.css';
import '../../css/s/s4e15fj_f.css';
import '../../css/w/wc_q0ns4c.css';
import '../../css/u/uolfhgilm.css';
import '../../css/q/qjgo34ppu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkovvsv-o wm-shadow"/><path class="prf1umqmd wm-k"/><path class="feqanpbty wm-k"/><path class="s4e15fj_f wm-k"/><path class="wc_q0ns4c wm-k"/><path class="uolfhgilm wm-k"/><path class="qjgo34ppu wm-shine"/>`,
		"fallback": "withicons-pastel:cloud",
	});
}

export default Component;
