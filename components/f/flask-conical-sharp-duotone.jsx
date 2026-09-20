import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tvbb9gb-d.css';
import '../../css/r/r1a_d_bgc.css';
import '../../css/d/dx93_50hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tvbb9gb-d"/><path class="r1a_d_bgc"/><path class="dx93_50hj"/></g>`,
		"fallback": "keyline-icons:flask-conical-sharp-duotone",
	});
}

export default Component;
