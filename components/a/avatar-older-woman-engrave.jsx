import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n7_wef7ly.css';
import '../../css/l/lpxjqibjk.css';
import '../../css/n/nzcr9sb2h.css';
import '../../css/k/kxy358b-l.css';
import '../../css/k/kfvqsfbkz.css';
import '../../css/b/baylgehlv.css';
import '../../css/u/uc2l5qcjv.css';
import '../../css/w/wfq8uz8wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n7_wef7ly wm-k"/><path class="lpxjqibjk wm-a"/><path class="nzcr9sb2h wm-shadow"/><path class="kxy358b-l wm-k"/><path class="kfvqsfbkz wm-k"/><path class="baylgehlv wm-a"/><path class="uc2l5qcjv wm-a"/><path class="wfq8uz8wa wm-a"/></g>`,
		"fallback": "withicons:avatar-older-woman-engrave",
	});
}

export default Component;
