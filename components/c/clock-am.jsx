import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dkh6tvblw.css';
import '../../css/s/sd3x4mmgk.css';
import '../../css/i/ige_o2b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dkh6tvblw"/><path class="sd3x4mmgk"/><path class="ige_o2b4i"/></g>`,
		"fallback": "andrsrxn:clock-am",
	});
}

export default Component;
