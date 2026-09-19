import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/ssh2mccsr.css';
import '../../css/a/ao6eqs1zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ssh2mccsr"/><path class="ao6eqs1zd"/></g>`,
		"fallback": "hugeicons:contact-book",
	});
}

export default Component;
