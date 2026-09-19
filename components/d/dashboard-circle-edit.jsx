import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cwobmmbvu.css';
import '../../css/s/s9kj1l5gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cwobmmbvu"/><path class="s9kj1l5gv"/></g>`,
		"fallback": "hugeicons:dashboard-circle-edit",
	});
}

export default Component;
