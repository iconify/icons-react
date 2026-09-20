import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxu3h_bzq.css';
import '../../css/h/huwsqgbpq.css';
import '../../css/x/x45_rkbnz.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jw-ef850o.css';
import '../../css/v/vwpht9brb.css';
import '../../css/g/glt8mcc0x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxu3h_bzq"/><path class="huwsqgbpq"/><path class="x45_rkbnz"/><g class="jn8qy4bru"><path class="jw-ef850o"/><path class="vwpht9brb"/><path class="glt8mcc0x"/></g>`,
		"fallback": "openmoji:gardening-gloves",
	});
}

export default Component;
