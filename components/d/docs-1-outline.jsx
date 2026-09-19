import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spbusxb1r.css';
import '../../css/r/rx4tebybx.css';
import '../../css/m/m_lms727n.css';
import '../../css/r/rb1btvicu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="spbusxb1r"/><path class="rx4tebybx"/><path class="m_lms727n"/><path class="rb1btvicu"/></g>`,
		"fallback": "glyphs:docs-1-outline",
	});
}

export default Component;
