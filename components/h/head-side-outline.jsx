import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k84vybbzx.css';
import '../../css/r/roow3r2cc.css';
import '../../css/l/lf34zubqx.css';
import '../../css/d/dlqac-the.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k84vybbzx"/><path clip-rule="evenodd" class="roow3r2cc"/><path class="lf34zubqx"/><path clip-rule="evenodd" class="dlqac-the"/></g>`,
		"fallback": "glyphs:head-side-outline",
	});
}

export default Component;
