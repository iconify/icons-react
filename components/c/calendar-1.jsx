import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yf-jas5-p.css';
import '../../css/a/a4x0ncbgp.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yf-jas5-p"/><path class="a4x0ncbgp"/></g>`,
		"fallback": "si-glyph:calendar-1",
	});
}

export default Component;
