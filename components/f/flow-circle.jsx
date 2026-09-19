import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sknh1b5ip.css';
import '../../css/u/ucz8q6b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sknh1b5ip"/><path class="ucz8q6b4k"/></g>`,
		"fallback": "hugeicons:flow-circle",
	});
}

export default Component;
