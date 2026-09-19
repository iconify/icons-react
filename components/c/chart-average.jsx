import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iz8_ibc7z.css';
import '../../css/r/rvab0qf4b.css';
import '../../css/v/v7_qmpb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iz8_ibc7z"/><path class="rvab0qf4b"/><path class="v7_qmpb8n"/></g>`,
		"fallback": "hugeicons:chart-average",
	});
}

export default Component;
