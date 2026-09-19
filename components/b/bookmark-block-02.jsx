import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dbui0fbjr.css';
import '../../css/y/yqtwf9z-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dbui0fbjr"/><path class="yqtwf9z-v"/></g>`,
		"fallback": "hugeicons:bookmark-block-02",
	});
}

export default Component;
