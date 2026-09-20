import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/g/g4vd3fxen.css';
import '../../css/i/idnl17j3e.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGN28QwdGa"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="g4vd3fxen"/><path class="idnl17j3e"/></g></mask></defs><circle mask="url(#SVGN28QwdGa)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:headphone-circle-filled",
	});
}

export default Component;
