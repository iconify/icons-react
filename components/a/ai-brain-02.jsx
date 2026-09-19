import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aabt0hh5g.css';
import '../../css/m/m-7xodbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aabt0hh5g"/><path class="m-7xodbzf"/></g>`,
		"fallback": "hugeicons:ai-brain-02",
	});
}

export default Component;
