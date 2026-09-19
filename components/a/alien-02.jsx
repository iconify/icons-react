import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8pb5pdno.css';
import '../../css/j/jxst5l4bq.css';
import '../../css/i/in4dbducl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e8pb5pdno"/><path class="jxst5l4bq"/><path class="in4dbducl"/></g>`,
		"fallback": "hugeicons:alien-02",
	});
}

export default Component;
