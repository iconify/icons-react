import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q_2ja2uig.css';
import '../../css/e/ev-r29bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q_2ja2uig"/><path class="ev-r29bpc"/></g>`,
		"fallback": "hugeicons:delivery-delay-01",
	});
}

export default Component;
