import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o9ukiybod.css';
import '../../css/r/r8svpwbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="o9ukiybod"/><path class="r8svpwbcv"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-sharp-fill",
	});
}

export default Component;
