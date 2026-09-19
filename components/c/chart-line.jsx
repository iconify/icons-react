import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ciqngbc0l.css';
import '../../css/j/j9vih8dli.css';
import '../../css/w/w9-6243pt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ciqngbc0l"/><path class="j9vih8dli"/><path class="w9-6243pt"/></g>`,
		"fallback": "glyphs-poly:chart-line",
	});
}

export default Component;
