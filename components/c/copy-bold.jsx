import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pet2pre7u.css';
import '../../css/m/m691cpbdm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pet2pre7u"/><path class="m691cpbdm"/></g>`,
		"fallback": "glyphs:copy-bold",
	});
}

export default Component;
