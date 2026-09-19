import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ayzzz4bhd.css';
import '../../css/l/ll6aldm1t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ayzzz4bhd"/><path class="ll6aldm1t"/></g>`,
		"fallback": "si-glyph:global",
	});
}

export default Component;
