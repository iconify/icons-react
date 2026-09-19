import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fksuwacax.css';
import '../../css/m/mo-5z4w7n.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fksuwacax"/><path class="mo-5z4w7n"/></g>`,
		"fallback": "si-glyph:arrow-thick-thin-down",
	});
}

export default Component;
