import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q20br122c.css';
import '../../css/v/v4au5ibqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q20br122c"/><path class="v4au5ibqe"/></g>`,
		"fallback": "hugeicons:cosine-02",
	});
}

export default Component;
