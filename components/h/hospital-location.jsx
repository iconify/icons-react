import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b630kdece.css';
import '../../css/u/uvqjd8ubg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b630kdece"/><path class="uvqjd8ubg"/></g>`,
		"fallback": "hugeicons:hospital-location",
	});
}

export default Component;
