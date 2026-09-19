import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iajx504bs.css';
import '../../css/q/qmvobh65p.css';
import '../../css/d/dj3sakoey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iajx504bs"/><path class="qmvobh65p"/><path class="dj3sakoey"/></g>`,
		"fallback": "hugeicons:billiard-01",
	});
}

export default Component;
