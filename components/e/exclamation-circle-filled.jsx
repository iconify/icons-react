import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/s/sl1u3-b3g.css';
import '../../css/o/o9rkjl_xn.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGz75UHd9O"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="sl1u3-b3g"/><path class="o9rkjl_xn"/></g></mask></defs><circle mask="url(#SVGz75UHd9O)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:exclamation-circle-filled",
	});
}

export default Component;
