import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xwaric7fy.css';
import '../../css/g/gtvwdabcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xwaric7fy"/><path class="gtvwdabcz"/></g>`,
		"fallback": "keyline-icons:chart-bar-big-sharp-fill",
	});
}

export default Component;
