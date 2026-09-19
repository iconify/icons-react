import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qjax52bcq.css';
import '../../css/u/u4b1p6yqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qjax52bcq"/><path class="u4b1p6yqt"/></g>`,
		"fallback": "hugeicons:dollar-02",
	});
}

export default Component;
