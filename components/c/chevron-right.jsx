import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx4ncib0x.css';
import '../../css/l/lbiyczr4y.css';
import '../../css/j/jckwg7biv.css';
import '../../css/e/ek3-hlhhm.css';
import '../../css/p/puzg_36lo.css';
import '../../css/l/lazcgacpq.css';
import '../../css/u/ubr_u5b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx4ncib0x wm-shadow"/><path class="lbiyczr4y"/><path class="jckwg7biv"/><path class="ek3-hlhhm"/><path class="puzg_36lo"/><path class="lazcgacpq wm-shine"/><path class="ubr_u5b_z"/>`,
		"fallback": "withicons-plush:chevron-right",
	});
}

export default Component;
