import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m63r7jbfo.css';
import '../../css/j/j46aqcc-v.css';
import '../../css/k/kiibvmbtk.css';
import '../../css/q/q0eay4bxs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m63r7jbfo"/><path class="j46aqcc-v"/><path clip-rule="evenodd" class="kiibvmbtk"/><path class="q0eay4bxs"/></g>`,
		"fallback": "glyphs:flip-outline",
	});
}

export default Component;
