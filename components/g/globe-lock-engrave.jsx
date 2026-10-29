import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u1axzfbjr.css';
import '../../css/s/s_blxgjaq.css';
import '../../css/q/qq-ev0bwh.css';
import '../../css/v/vxmxbkbox.css';
import '../../css/c/cn2f9dbpj.css';
import '../../css/c/cgfl_2-qj.css';
import '../../css/u/umvgb2fhw.css';
import '../../css/x/xhowx-bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u1axzfbjr wm-k"/><path class="s_blxgjaq wm-a"/><path class="qq-ev0bwh wm-s"/><path class="vxmxbkbox wm-shadow"/><path class="cn2f9dbpj wm-k"/><path class="cgfl_2-qj wm-a"/><path class="umvgb2fhw wm-s"/><path class="wm-a xhowx-bcx"/></g>`,
		"fallback": "withicons:globe-lock-engrave",
	});
}

export default Component;
