import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ciz7-jbxb.css';
import '../../css/i/i0xmrf2hw.css';
import '../../css/o/oeg0rqs_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ciz7-jbxb"/><rect class="i0xmrf2hw"/><path class="oeg0rqs_p"/></g>`,
		"fallback": "andrsrxn:heater",
	});
}

export default Component;
