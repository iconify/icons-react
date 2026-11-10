import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dz2cjabvp.css';
import '../../css/x/x1m55k_fu.css';
import '../../css/e/ei6ze2bhw.css';
import '../../css/z/z28viubrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dz2cjabvp"/><path class="x1m55k_fu"/><path class="ei6ze2bhw"/><path class="z28viubrc"/></g>`,
		"fallback": "andrsrxn:credit-cards",
	});
}

export default Component;
