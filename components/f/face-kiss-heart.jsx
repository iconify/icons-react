import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mik60qboj.css';
import '../../css/o/o7t8y_2nd.css';
import '../../css/j/jf-h0mblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mik60qboj"/><path class="o7t8y_2nd"/><path class="jf-h0mblo"/></g>`,
		"fallback": "andrsrxn:face-kiss-heart",
	});
}

export default Component;
