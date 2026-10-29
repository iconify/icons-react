import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_jv868wi.css';
import '../../css/a/ai8_c8bmq.css';
import '../../css/j/j44_jlbcg.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/z/z5pfo_ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u_jv868wi wm-k"/><path class="ai8_c8bmq wm-a"/><path class="j44_jlbcg wm-shadow"/><path class="lhr7mp78x wm-k"/><path class="wm-a z5pfo_ber"/></g>`,
		"fallback": "withicons:cloud-snow-engrave",
	});
}

export default Component;
