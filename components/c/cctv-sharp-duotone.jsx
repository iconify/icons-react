import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w0tbizb6v.css';
import '../../css/u/uq1a7euhz.css';
import '../../css/k/k5ha-2b_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w0tbizb6v"/><path class="uq1a7euhz"/><path clip-rule="evenodd" class="k5ha-2b_m"/></g>`,
		"fallback": "keyline-icons:cctv-sharp-duotone",
	});
}

export default Component;
