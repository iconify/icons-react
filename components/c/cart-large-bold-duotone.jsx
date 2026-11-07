import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtl0lbbqr.css';
import '../../css/u/u_jrch4xm.css';
import '../../css/s/sxqy4g73d.css';
import '../../css/m/mfpwskuoa.css';
import '../../css/m/m4ndt4bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtl0lbbqr"/><path class="u_jrch4xm"/><path class="sxqy4g73d"/><path class="mfpwskuoa"/><path class="m4ndt4bdj"/>`,
		"fallback": "solar:cart-large-bold-duotone",
	});
}

export default Component;
