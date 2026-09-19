import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxoayeblc.css';
import '../../css/t/tzxlrc-ek.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxoayeblc"/><path class="tzxlrc-ek"/></g>`,
		"fallback": "glyphs-poly:border-outer",
	});
}

export default Component;
