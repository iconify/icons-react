import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tel200bxj.css';
import '../../css/h/heyt-6b_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tel200bxj"/><path class="heyt-6b_w"/></g>`,
		"fallback": "keyline-icons:coins-sharp-fill",
	});
}

export default Component;
