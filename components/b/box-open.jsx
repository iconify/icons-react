import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qeu3oyboz.css';
import '../../css/o/oxcv_gb7p.css';
import '../../css/n/n__fyrb5e.css';
import '../../css/k/kfwhzrbip.css';
import '../../css/w/w1dxaibuh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qeu3oyboz"/><path class="oxcv_gb7p"/><path clip-rule="evenodd" class="n__fyrb5e"/><path class="kfwhzrbip"/><path clip-rule="evenodd" class="w1dxaibuh"/></g>`,
		"fallback": "glyphs-poly:box-open",
	});
}

export default Component;
