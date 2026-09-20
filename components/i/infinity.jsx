import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6mizdc5u.css';
import '../../css/r/r8ikbo9ae.css';
import '../../css/o/o4dmadb3b.css';
import '../../css/o/o_kit7b-o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6mizdc5u"/><g class="r8ikbo9ae"><path class="o4dmadb3b"/><path class="o_kit7b-o"/></g>`,
		"fallback": "openmoji:infinity",
	});
}

export default Component;
