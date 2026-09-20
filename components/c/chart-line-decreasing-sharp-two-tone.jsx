import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/g/gmt0d8_0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="gmt0d8_0z"/></g>`,
		"fallback": "keyline-icons:chart-line-decreasing-sharp-two-tone",
	});
}

export default Component;
