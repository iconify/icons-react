import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c-zhdyyrj.css';
import '../../css/p/pnm_cr1lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="c-zhdyyrj"/><path class="pnm_cr1lt"/></g>`,
		"fallback": "keyline-icons:arrow-in-down-right-dashed-panel-sharp-duotone",
	});
}

export default Component;
