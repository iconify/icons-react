import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r5vt8rz3h.css';
import '../../css/h/h1mxi5b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r5vt8rz3h"/><path class="h1mxi5b2n"/></g>`,
		"fallback": "hugeicons:git-fork",
	});
}

export default Component;
