import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n46qgjdva.css';
import '../../css/e/ez100dohu.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="n46qgjdva"/><path class="ez100dohu"/></g>`,
		"fallback": "si-glyph:corner-flag",
	});
}

export default Component;
