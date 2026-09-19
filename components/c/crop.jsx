import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vu8tbn1vs.css';
import '../../css/j/j8ony4b9l.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vu8tbn1vs"/><path class="j8ony4b9l"/></g>`,
		"fallback": "si-glyph:crop",
	});
}

export default Component;
