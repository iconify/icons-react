import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
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
		"content": `<g class="flen3tbdj"><path class="zcol8lbmt"/><path class="n40fmrbcr"/></g>`,
		"fallback": "lets-icons:calories",
	});
}

export default Component;
