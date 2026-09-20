import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/ggmhv295l.css';
import '../../css/f/f1s09-5xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ggmhv295l"/><path class="f1s09-5xg"/></g>`,
		"fallback": "solar:health-linear",
	});
}

export default Component;
