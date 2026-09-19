import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tjhny14md.css';
import '../../css/q/q5nlm_vzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tjhny14md"/><path class="q5nlm_vzp"/></g>`,
		"fallback": "icon-park:heart-ballon",
	});
}

export default Component;
