import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p71h2fb2r.css';
import '../../css/u/uijum5buq.css';
import '../../css/u/uru2fok5k.css';
import '../../css/b/bf4c_jqur.css';
import '../../css/k/k5vniu2ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p71h2fb2r"/><path class="uijum5buq"/><path class="uru2fok5k"/><path class="bf4c_jqur"/><path class="k5vniu2ml"/></g>`,
		"fallback": "andrsrxn:asteroid",
	});
}

export default Component;
