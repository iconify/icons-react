import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/d/dgp5bp7mg.css';
import '../../css/x/x4mv-7s-h.css';
import '../../css/y/ywrsrb7ne.css';
import '../../css/l/lsen5obiz.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGo3b94bzQ"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="dgp5bp7mg"/><path clip-rule="evenodd" class="x4mv-7s-h"/><path class="ywrsrb7ne"/><path clip-rule="evenodd" class="lsen5obiz"/></g></mask></defs><circle mask="url(#SVGo3b94bzQ)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:handshake-circle-filled",
	});
}

export default Component;
