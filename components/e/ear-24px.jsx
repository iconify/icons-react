import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bih_-rh-p.css';
import '../../css/p/poe4vybgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bih_-rh-p"/><path class="poe4vybgq"/></g>`,
		"fallback": "healthicons:ear-24px",
	});
}

export default Component;
