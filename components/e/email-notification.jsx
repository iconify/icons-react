import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/caeecabqw.css';
import '../../css/e/eti1awbyg.css';
import '../../css/l/lm2y_hbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="caeecabqw"/><path class="eti1awbyg"/><circle class="lm2y_hbzh"/></g>`,
		"fallback": "mage:email-notification",
	});
}

export default Component;
