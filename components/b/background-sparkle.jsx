import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vw-gtcb5z.css';
import '../../css/i/iqhlhebta.css';
import '../../css/h/hr-ftzb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vw-gtcb5z"/><path class="iqhlhebta"/><path class="hr-ftzb3v"/></g>`,
		"fallback": "andrsrxn:background-sparkle",
	});
}

export default Component;
