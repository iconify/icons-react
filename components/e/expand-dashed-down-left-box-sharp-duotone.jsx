import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/boydabcop.css';
import '../../css/s/skg78etpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="boydabcop"/><path class="skg78etpb"/></g>`,
		"fallback": "keyline-icons:expand-dashed-down-left-box-sharp-duotone",
	});
}

export default Component;
