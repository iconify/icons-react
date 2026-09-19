import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qq-kuu89s.css';
import '../../css/f/fmlvbub9w.css';
import '../../css/u/u2_g62bcn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qq-kuu89s"/><path clip-rule="evenodd" class="fmlvbub9w"/><path class="u2_g62bcn"/></g>`,
		"fallback": "glyphs-poly:hammer",
	});
}

export default Component;
