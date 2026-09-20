import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zcol8lbmt.css';
import '../../css/n/n40fmrbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="zcol8lbmt"/><path class="n40fmrbcr"/></g>`,
		"fallback": "lets-icons:calories-light",
	});
}

export default Component;
