import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/drr12uo2g.css';
import '../../css/b/bryy_6b1h.css';
import '../../css/e/e0dk2vh0j.css';
import '../../css/k/kc_loxu3p.css';
import '../../css/l/lb1a6hbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="drr12uo2g wm-k"/><path class="bryy_6b1h wm-a"/><path class="e0dk2vh0j wm-shadow"/><path class="kc_loxu3p wm-k"/><path class="lb1a6hbix wm-a"/></g>`,
		"fallback": "withicons:forward-engrave",
	});
}

export default Component;
