import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xa25e2bcx.css';
import '../../css/w/wlbru8rrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xa25e2bcx"/><path class="wlbru8rrs"/></g>`,
		"fallback": "keyline-icons:calendar-sparkles-fill",
	});
}

export default Component;
