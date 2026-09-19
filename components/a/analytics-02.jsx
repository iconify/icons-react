import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c7_9ow3sz.css';
import '../../css/h/hqyz39bub.css';
import '../../css/j/jg1phg1pi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c7_9ow3sz"/><path class="hqyz39bub"/><path class="jg1phg1pi"/></g>`,
		"fallback": "hugeicons:analytics-02",
	});
}

export default Component;
