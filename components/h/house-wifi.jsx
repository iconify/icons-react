import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c20oaqmoz.css';
import '../../css/i/iskl3g_ta.css';
import '../../css/s/st-2scbtn.css';
import '../../css/t/t8aevub-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c20oaqmoz"/><path class="iskl3g_ta"/><path class="st-2scbtn"/><path class="t8aevub-a"/></g>`,
		"fallback": "andrsrxn:house-wifi",
	});
}

export default Component;
