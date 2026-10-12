import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtiyrob2d.css';
import '../../css/o/ohd-xwb1k.css';
import '../../css/f/fv8vjv-xq.css';
import '../../css/w/wldsyeb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="rtiyrob2d"/><rect class="ohd-xwb1k"/><rect class="fv8vjv-xq"/><path class="wldsyeb3j"/></g>`,
		"fallback": "andrsrxn:browsers",
	});
}

export default Component;
