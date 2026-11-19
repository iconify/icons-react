import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t50nn_bmc.css';
import '../../css/x/xlucq3ixv.css';
import '../../css/s/soy__snau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t50nn_bmc"/><path class="xlucq3ixv"/><path class="soy__snau"/></g>`,
		"fallback": "andrsrxn:fish-bones",
	});
}

export default Component;
