import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odc_d4b3c.css';
import '../../css/m/mmojxpw0i.css';
import '../../css/t/tbi_u1bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="odc_d4b3c"/><path class="mmojxpw0i"/><path class="tbi_u1bpw"/></g>`,
		"fallback": "andrsrxn:candy-off",
	});
}

export default Component;
