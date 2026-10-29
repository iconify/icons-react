import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fi0_0_bdg.css';
import '../../css/x/xkndeybay.css';
import '../../css/o/o_a2_tbyl.css';
import '../../css/s/sxlwlmkmh.css';
import '../../css/a/a7il49b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fi0_0_bdg wm-k"/><path class="wm-a xkndeybay"/><path class="o_a2_tbyl wm-shadow"/><path class="sxlwlmkmh wm-k"/><path class="a7il49b7h wm-a"/></g>`,
		"fallback": "withicons:arrow-right-engrave",
	});
}

export default Component;
