import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shtj7249c.css';
import '../../css/c/c_9t11wpq.css';
import '../../css/b/bf-n60imn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shtj7249c"/><path class="c_9t11wpq"/><path class="bf-n60imn"/></g>`,
		"fallback": "andrsrxn:escalator-up",
	});
}

export default Component;
