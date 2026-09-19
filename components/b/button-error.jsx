import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g6cwcf8-e.css';
import '../../css/i/il16k2_9s.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g6cwcf8-e"/><path class="il16k2_9s"/></g>`,
		"fallback": "si-glyph:button-error",
	});
}

export default Component;
