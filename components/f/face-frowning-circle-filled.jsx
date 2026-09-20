import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/z/z2dg25zkk.css';
import '../../css/h/h5q-b7bfk.css';
import '../../css/c/c8_hbywkl.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGvhIHXb3i"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="z2dg25zkk"/><path class="h5q-b7bfk"/><path clip-rule="evenodd" class="c8_hbywkl"/></g></mask></defs><circle mask="url(#SVGvhIHXb3i)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:face-frowning-circle-filled",
	});
}

export default Component;
