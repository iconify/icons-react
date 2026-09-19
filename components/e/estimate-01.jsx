import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j5r9vy1yt.css';
import '../../css/g/gqbjnibrr.css';
import '../../css/r/r0dvnpb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j5r9vy1yt"/><path class="gqbjnibrr"/><path class="r0dvnpb_w"/></g>`,
		"fallback": "hugeicons:estimate-01",
	});
}

export default Component;
