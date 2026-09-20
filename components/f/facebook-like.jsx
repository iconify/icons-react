import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rypcozb0t.css';
import '../../css/o/oqz9ysb-d.css';
import '../../css/r/r_b_s9bgt.css';
import '../../css/e/eodx_2bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rypcozb0t"/><path class="oqz9ysb-d"/><path class="r_b_s9bgt"/><path class="eodx_2bdo"/></g>`,
		"fallback": "streamline-cyber-color:facebook-like",
	});
}

export default Component;
