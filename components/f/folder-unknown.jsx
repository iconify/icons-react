import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s4t_ye6wq.css';
import '../../css/x/x3dy8mbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s4t_ye6wq"/><path class="x3dy8mbvh"/></g>`,
		"fallback": "hugeicons:folder-unknown",
	});
}

export default Component;
