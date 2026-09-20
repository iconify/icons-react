import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dailtsmvb.css';
import '../../css/u/uw_f3e0nw.css';
import '../../css/j/jdkg2b8su.css';
import '../../css/i/i2afqdhro.css';
import '../../css/l/li08e_y6g.css';
import '../../css/k/kdceb2bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dailtsmvb"/><path class="uw_f3e0nw"/><path class="jdkg2b8su"/><path class="i2afqdhro"/><path class="li08e_y6g"/><path class="kdceb2bpp"/></g>`,
		"fallback": "solar:gamepad-linear",
	});
}

export default Component;
