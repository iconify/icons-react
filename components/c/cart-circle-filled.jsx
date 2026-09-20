import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/k/khiaq02ik.css';
import '../../css/b/boc9s-fhp.css';
import '../../css/b/b4dmablfp.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG89QY2byJ"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="khiaq02ik"/><path clip-rule="evenodd" class="boc9s-fhp"/><path class="b4dmablfp"/></g></mask></defs><circle mask="url(#SVG89QY2byJ)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:cart-circle-filled",
	});
}

export default Component;
