import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lqm6vl25b.css';
import '../../css/u/ut5ih9blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lqm6vl25b"/><path class="ut5ih9blb"/></g>`,
		"fallback": "keyline-icons:bottle-fill",
	});
}

export default Component;
