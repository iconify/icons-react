import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q7dv2p0mu.css';
import '../../css/u/u59l_jb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q7dv2p0mu"/><path class="u59l_jb4n"/></g>`,
		"fallback": "si:chevron-left-square-duotone",
	});
}

export default Component;
