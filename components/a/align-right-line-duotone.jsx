import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hrhj5ybtt.css';
import '../../css/q/qg2a123rv.css';
import '../../css/j/j8wqpub6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hrhj5ybtt"/><path class="qg2a123rv"/><path class="j8wqpub6c"/></g>`,
		"fallback": "solar:align-right-line-duotone",
	});
}

export default Component;
