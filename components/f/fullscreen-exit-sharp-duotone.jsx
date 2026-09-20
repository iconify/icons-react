import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zakzfrb_i.css';
import '../../css/s/sgr6ct_qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zakzfrb_i"/><path class="sgr6ct_qp"/></g>`,
		"fallback": "keyline-icons:fullscreen-exit-sharp-duotone",
	});
}

export default Component;
