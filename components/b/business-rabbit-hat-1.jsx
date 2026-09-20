import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e17qjjsgw.css';
import '../../css/d/dd4mt6b_s.css';
import '../../css/z/zakx-8ilh.css';
import '../../css/o/ona2a9vbr.css';
import '../../css/f/f6klvx_lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e17qjjsgw"/><path class="dd4mt6b_s"/><path class="zakx-8ilh"/><path class="ona2a9vbr"/><path class="f6klvx_lc"/></g>`,
		"fallback": "streamline-ultimate-color:business-rabbit-hat-1",
	});
}

export default Component;
