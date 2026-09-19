import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c1_19k84o.css';
import '../../css/j/jxe3ceblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c1_19k84o"/><path class="jxe3ceblc"/></g>`,
		"fallback": "hugeicons:glasses",
	});
}

export default Component;
