import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qbcs2xgch.css';
import '../../css/h/hplz24bws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qbcs2xgch"/><path class="hplz24bws"/></g>`,
		"fallback": "keyline-icons:circle-indian-rupee-sharp-duotone",
	});
}

export default Component;
