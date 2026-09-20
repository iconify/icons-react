import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fvyxm7bvs.css';
import '../../css/s/sp1mbgw9c.css';
import '../../css/e/e-9alfbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fvyxm7bvs"/><path class="sp1mbgw9c"/><path class="e-9alfbmd"/></g>`,
		"fallback": "keyline-icons:baby-2-girl-sharp-duotone",
	});
}

export default Component;
