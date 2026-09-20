import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-mnlgw9n.css';
import '../../css/v/v1eutmziz.css';
import '../../css/i/i9r4wlsaa.css';
import '../../css/e/ezc732b_l.css';
import '../../css/m/mxiqd3kbh.css';
import '../../css/h/hi8rbjbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-mnlgw9n"/><path class="v1eutmziz"/><path class="i9r4wlsaa"/><path class="ezc732b_l"/><path class="mxiqd3kbh"/><path class="hi8rbjbpk"/></g>`,
		"fallback": "streamline-cyber-color:book-open-bookmark",
	});
}

export default Component;
