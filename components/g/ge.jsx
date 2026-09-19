import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq9270lis.css';
import '../../css/w/w1a_s9bsr.css';
import '../../css/r/rne3g0oqs.css';

const viewBox = {"width":300,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wq9270lis"/><path class="w1a_s9bsr"/><path class="rne3g0oqs"/></g>`,
		"fallback": "cif:ge",
	});
}

export default Component;
