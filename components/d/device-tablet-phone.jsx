import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1c-ynbdd.css';
import '../../css/u/um7xp58ns.css';
import '../../css/i/i_y_cqlwr.css';
import '../../css/n/nvb-2kouc.css';
import '../../css/l/ltvkdbw3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w1c-ynbdd"/><path class="um7xp58ns"/><path class="i_y_cqlwr"/><rect transform="rotate(-90 13.7 21.4)" class="nvb-2kouc"/><path class="ltvkdbw3m"/></g>`,
		"fallback": "andrsrxn:device-tablet-phone",
	});
}

export default Component;
