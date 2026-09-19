import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/clmogw5jo.css';
import '../../css/p/p69wevbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="clmogw5jo"/><path class="p69wevbnc"/></g>`,
		"fallback": "hugeicons:backward-01",
	});
}

export default Component;
