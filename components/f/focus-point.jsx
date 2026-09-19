import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cttfdwgtx.css';
import '../../css/w/wegl1_9-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cttfdwgtx"/><path class="wegl1_9-p"/></g>`,
		"fallback": "hugeicons:focus-point",
	});
}

export default Component;
