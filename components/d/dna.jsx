import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/llabn6bid.css';
import '../../css/h/h4lkxjb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="llabn6bid"/><path class="h4lkxjb1u"/></g>`,
		"fallback": "streamline-sharp:dna",
	});
}

export default Component;
