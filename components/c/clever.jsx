import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgxjedc_k.css';
import '../../css/s/s9z829grf.css';
import '../../css/m/mx8b_jb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rgxjedc_k"/><path class="s9z829grf"/><path class="mx8b_jb1y"/></g>`,
		"fallback": "andrsrxn:clever",
	});
}

export default Component;
