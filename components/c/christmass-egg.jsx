import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j4wgzr7lu.css';
import '../../css/i/iha-1kb9g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="j4wgzr7lu"/><path class="iha-1kb9g"/></g>`,
		"fallback": "si-glyph:christmass-egg",
	});
}

export default Component;
