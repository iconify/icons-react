import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/am1_grbcw.css';
import '../../css/k/kcu1pgbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="am1_grbcw"/><path class="kcu1pgbck"/></g>`,
		"fallback": "keyline-icons:expand-dashed-down-right-sharp-duotone",
	});
}

export default Component;
