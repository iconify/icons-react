import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k81i2obvv.css';
import '../../css/e/em283yboy.css';
import '../../css/t/tt8fklbvo.css';
import '../../css/m/mf-3ce6ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k81i2obvv"/><path class="em283yboy wm-shadow"/><path class="tt8fklbvo"/><path class="mf-3ce6ro"/></g>`,
		"fallback": "withicons:armchair-engrave",
	});
}

export default Component;
