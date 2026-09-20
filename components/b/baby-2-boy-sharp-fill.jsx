import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t11kj5rgv.css';
import '../../css/n/n39tj71et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t11kj5rgv"/><path class="n39tj71et"/></g>`,
		"fallback": "keyline-icons:baby-2-boy-sharp-fill",
	});
}

export default Component;
