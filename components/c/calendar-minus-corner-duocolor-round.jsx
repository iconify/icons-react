import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yv0shlb-w.css';
import '../../css/a/atkmu9bjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yv0shlb-w"/><path class="atkmu9bjw"/></g>`,
		"fallback": "coolicons:calendar-minus-corner-duocolor-round",
	});
}

export default Component;
