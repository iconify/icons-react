import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d134adcia.css';
import '../../css/q/qgtugyijq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d134adcia"/><path class="qgtugyijq"/></g>`,
		"fallback": "glyphs-poly:bezier-triangle",
	});
}

export default Component;
