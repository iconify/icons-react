import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/glm_1bcrk.css';
import '../../css/l/lf8b9c3sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="glm_1bcrk"/><path class="lf8b9c3sr"/></g>`,
		"fallback": "solar:bolt-line-duotone",
	});
}

export default Component;
