import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xekjsrb2x.css';
import '../../css/w/ww2732bna.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xekjsrb2x"/><path class="ww2732bna"/></g>`,
		"fallback": "si-glyph:calendar-empty",
	});
}

export default Component;
